<template>
  <div>
    <a-form id="components-form-demo-validate-other" :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="Name">
        <a-input
          v-decorator="[
          'name',
          {rules: [{ required: true, message: 'Please input model name!' }]}
        ]"
          placeholder="model name"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="Country" has-feedback>
        <a-select
          v-decorator="[
          'nationality',
          {rules: [{ required: true, message: 'Please select country!' }]}
        ]"
          @change="handleCountryChange"
          showSearch
          optionFilterProp="children"
          @focus="handleFocus"
          @blur="handleBlur"
          :filterOption="filterOption"
        >
          <a-select-option v-for="country in countryData" :key="country">{{country}}</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Cities">
        <a-select
          v-decorator="[
          'city', {
            rules: [{ required: true, message: 'Please select city!' }],
          }]"
          showSearch
          optionFilterProp="children"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :filterOption="filterOption"
        >
          <a-select-option v-for="city in cities" :key="city">{{city}}</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Road Type">
        <a-radio-group
          v-decorator="['road_type',{rules: [{ required: true, message: 'Please select road type!' }]}]"
        >
          <a-radio value="freeway">Freeway</a-radio>
          <a-radio value="intersection">Intersection</a-radio>
          <a-radio value="macrolevel">Macro Level</a-radio>
          <a-radio value="urbanarterial">Urban Arterial</a-radio>
          <a-radio value="urbanexpressway">Urban Expressway</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Statistical Type">
        <a-radio-group
          v-decorator="['statistical_type',{rules: [{ required: true, message: 'Please select statistical type!' }]}]"
        >
          <a-radio value="frequency">Frequency</a-radio>
          <a-radio value="logit">Logit</a-radio>
          <a-radio value="negativebinomial">Negative Binomial</a-radio>
          <a-radio value="poissongamma">Poisson-gamma</a-radio>
          <a-radio value="probit">Probit</a-radio>
          <a-radio value="severity">Severity</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Platform">
        <a-radio-group
          v-decorator="['platform', {rules: [{ required: true, message: 'Please select platform!' }]}]"
        >
          <a-radio value="python">Python</a-radio>
          <a-radio value="r">R</a-radio>
          <a-radio value="sas">SAS</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Functionality">
        <a-radio-group
          v-decorator="['functionality', {rules: [{ required: true, message: 'Please select functionality!' }]}]"
        >
          <a-radio value="comparison">Comparison</a-radio>
          <a-radio value="prediction">Prediction</a-radio>
          <a-radio value="regression">Regression</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Description">
        <a-input v-decorator="['description']" placeholder="description"/>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="File">
        <a-upload
          v-decorator="['files', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
            rules: [{ required: true, message: 'Please choose a file!' }]
          }]"
          :beforeUpload="beforeUpload"
        >
          <a-button>
            <a-icon type="upload"/>Select File
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import cities from "cities.json";
import axios from "axios";

export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    },
    countryData: ["CN", "GR", "GB", "US"],
    cityData: {
      CN: [],
      GR: [],
      GB: [],
      US: []
    },
    cities: []
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleCountryChange(value) {
      this.cities = this.cityData[value];
    },
    handleBlur() {},
    handleFocus() {},
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    beforeUpload(file) {
      return false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let formData = new FormData();

          // let body = [];
          // console.log(values)
          // Object.keys(values).forEach(element => {
          //   if (element != "files") {
          //     body.push('"'+element+'":"'+values[element]+'"')
          //   }
          // });
         
          const json = JSON.stringify(values);
          const blob = new Blob([json], {
            type: "application/json"
          });

          formData.append("body", blob);

          formData.append("file", values.files[0].originFileObj);

          axios
            .post(this.$hostname + "model", formData, {
              "Content-Type": "multipart/form-data"
            })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });

          alert("Uploaded successfully");
        }
      });
    },
    normFile(e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  },
  mounted() {
    cities.forEach(element => {
      let i = ["CN", "GR", "GB", "US"].indexOf(element.country);
      if (i != -1 && !this.cityData[element.country].includes(element.name)) {
        this.cityData[element.country].push(element.name);
      }
    });
  }
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
