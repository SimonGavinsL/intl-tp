<template>
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
          'country',
          {rules: [{ required: true, message: 'Please select your country!' }]}
        ]"
        placeholder="Please select a country"
      >
        <a-select-option value="CN">China</a-select-option>
        <a-select-option value="GR">Greece</a-select-option>
        <a-select-option value="GB">UK</a-select-option>
        <a-select-option value="US">US</a-select-option>
      </a-select>
    </a-form-item>

    <!-- Todo: Add cities to select options -->
    <a-form-item v-bind="formItemLayout" label="Cities">
      <a-select
        v-decorator="[
          'cities', {
            rules: [{ required: true, message: 'Please select cities!', type: 'array' }],
          }]"
        mode="multiple"
        placeholder="Please select cities"
      >
        <a-select-option value="red">Red</a-select-option>
        <a-select-option value="green">Green</a-select-option>
        <a-select-option value="blue">Blue</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Road Type">
      <a-radio-group v-decorator="['road']">
        <a-radio value="free">Freeway</a-radio>
        <a-radio value="inter">Intersection</a-radio>
        <a-radio value="ml">Macro Level</a-radio>
        <a-radio value="ua">Urban Arterial</a-radio>
        <a-radio value="ue">Urban Expressway</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Statistical Type">
      <a-radio-group v-decorator="['stat']">
        <a-radio value="frequency">Frequency</a-radio>
        <a-radio value="logit">Logit</a-radio>
        <a-radio value="negbi">Negative Binomial</a-radio>
        <a-radio value="poigamma">Poisson-gamma</a-radio>
        <a-radio value="probit">Probit</a-radio>
        <a-radio value="severity">Severity</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Platform">
      <a-radio-group v-decorator="['platform']">
        <a-radio value="python">Python</a-radio>
        <a-radio value="r">R</a-radio>
        <a-radio value="sas">SAS</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Functionality">
      <a-radio-group v-decorator="['func']">
        <a-radio value="comp">Comparison</a-radio>
        <a-radio value="pred">Prediction</a-radio>
        <a-radio value="regr">Regression</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Description">
      <a-input v-decorator="['desc']" placeholder="description"/>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="File">
      <div class="dropbox">
        <a-upload-dragger
          v-decorator="['files', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          }]"
          name="files"
          action="/upload.do"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox"/>
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </a-upload-dragger>
      </div>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    normFile(e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
