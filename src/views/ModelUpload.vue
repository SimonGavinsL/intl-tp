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
          <a-radio value="Freeway">Freeway</a-radio>
          <a-radio value="Intersection">Intersection</a-radio>
          <a-radio value="Macro Level">Macro Level</a-radio>
          <a-radio value="Urban Arterial">Urban Arterial</a-radio>
          <a-radio value="Urban Expressway">Urban Expressway</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Statistical Type">
        <a-radio-group
          v-decorator="['statistical_type',{rules: [{ required: true, message: 'Please select statistical type!' }]}]"
        >
          <a-radio value="Frequency">Frequency</a-radio>
          <a-radio value="Logit">Logit</a-radio>
          <a-radio value="Negative Binomial">Negative Binomial</a-radio>
          <a-radio value="Poisson-gamma">Poisson-gamma</a-radio>
          <a-radio value="Probit">Probit</a-radio>
          <a-radio value="Severity">Severity</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Platform">
        <a-radio-group
          v-decorator="['platform', {rules: [{ required: true, message: 'Please select platform!' }]}]"
        >
          <a-radio value="Python">Python</a-radio>
          <a-radio value="R">R</a-radio>
          <a-radio value="SAS">SAS</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Functionality">
        <a-radio-group
          v-decorator="['functionality', {rules: [{ required: true, message: 'Please select functionality!' }]}]"
        >
          <a-radio value="Comparison">Comparison</a-radio>
          <a-radio value="Prediction">Prediction</a-radio>
          <a-radio value="Regression">Regression</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Description">
        <a-input v-decorator="['description']" placeholder="description"/>
      </a-form-item>

      <a-form-item v-bind="formItemLayout" label="Image">
        <a-upload
          v-decorator="['image', {
            valuePropName: 'imageList',
            getValueFromEvent: normFile2,
            rules: [{ required: true, message: 'Please upload a image!' }]
          }]"
          :beforeUpload="beforeUpload"
        >
          <a-button>
            <a-icon type="upload"/>Select Image
          </a-button>
        </a-upload>
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
    countryData: ["CN", "DE", "GR", "GB", "US"],
    cityData: {
      CN: [],
      DE: [],
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
          const blob = new Blob([JSON.stringify(values)], {
            type: "application/json"
          });
          formData.append("body", blob);
          formData.append("file", values.files[0].originFileObj);
          formData.append("image", values.image[0].originFileObj);

          axios
            .post(this.$hostname + "model", formData, {
              "Content-Type": "multipart/form-data"
            })
            .then(response => {
              alert("Uploaded successfully");
              this.form.resetFields();
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
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
    normFile2(e) {
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
      let i = ["CN", "DE", "GR", "GB", "US"].indexOf(element.country);
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
