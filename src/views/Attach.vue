<template>
  <a-form id="components-form-demo-validate-other" :form="form" @submit="handleSubmit">
    <!-- Todo: Add models from server to select options -->
    <a-form-item v-bind="formItemLayout" label="Name">
      <a-select
        showSearch
        placeholder="input attachment name"
        :defaultActiveFirstOption="false"
        :showArrow="false"
        :filterOption="false"
        @search="handleSearch"
        @change="handleChange"
        :notFoundContent="null"
        v-decorator="['atta']"
      >
        <a-select-option v-for="d in data" :key="d.value">{{d.text}}</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Type">
      <a-radio-group v-decorator="['type']">
        <a-radio-button value="data">Data</a-radio-button>
        <a-radio-button value="res">Result</a-radio-button>
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
import jsonp from "fetch-jsonp";
import querystring from "querystring";

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: "utf-8",
      q: value
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0]
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    },
    data: []
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSearch(value) {
      fetch(value, data => (this.data = data));
    },
    handleChange(value) {
      // console.log(value);
      this.value = value;
      fetch(value, data => (this.data = data));
    },
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
