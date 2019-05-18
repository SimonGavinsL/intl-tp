<template>
  <div class="data">
    <br>
    <a-row type="flex" justify="space-around">
      <a-col :span="4">
        <div class="clearfix">
          <a-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
            <a-button>
              <a-icon type="upload"/>Select File
            </a-button>
          </a-upload>
          <a-button
            type="primary"
            @click="handleUpload"
            :disabled="fileList.length === 0"
            :loading="uploading"
            style="margin-top: 16px"
          >{{uploading ? 'Uploading' : 'Start Upload' }}</a-button>
        </div>
      </a-col>

      <a-col :span="18">
        <a-table :columns="columns" :dataSource="dataSource" bordered>
          <template slot="name" slot-scope="text, record">
            <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
          </template>

         <template slot="type" slot-scope="text, record">
            <selectable-cell :option="text" @change="onCellChange(record.key, 'type', $event)"/>
          </template>

          <template slot="unit" slot-scope="text, record">
            <editable-cell :text="text" @change="onCellChange(record.key, 'unit', $event)"/>
          </template>

          <template slot="desc" slot-scope="text, record">
            <editable-cell :text="text" @change="onCellChange(record.key, 'desc', $event)"/>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import reqwest from "reqwest";
import Papa from "papaparse";
import EditableCell from "@/components/EditableCell";
import SelectableCell from "@/components/SelectableCell";

export default {
  components: {
    EditableCell,
    SelectableCell
  },
  data() {
    return {
      fileList: [],
      uploading: false,
      columns: [
        {
          title: "name",
          dataIndex: "name",
          width: "25%",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "type",
          dataIndex: "type",
          scopedSlots: { customRender: "type" }
        },
        {
          title: "unit",
          dataIndex: "unit",
          scopedSlots: { customRender: "unit" }
        },
        {
          title: "description",
          dataIndex: "desc",
          scopedSlots: { customRender: "desc" }
        }
      ],
      dataSource: [],
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      Papa.parse(file, {
        // Arrow function, lexical scoping https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        complete: results => {
          results["data"][0].forEach((element, index) => {
            this.dataSource.push({
              key: index,
              name: element,
              type: "Categorical/Character/Numeric",
              unit: "",
              desc: ""
            });
          });
        }
      });
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append("files[]", file);
      });
      this.uploading = true;

      // You can use any AJAX library you like
      reqwest({
        url: "//jsonplaceholder.typicode.com/posts/",
        method: "post",
        processData: false,
        data: formData,
        success: () => {
          this.fileList = [];
          this.uploading = false;
          this.$message.success("upload successfully.");
        },
        error: () => {
          this.uploading = false;
          this.$message.error("upload failed.");
        }
      });
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
      console.log(this.dataSource)
    }
  }
};
</script>

<style scoped>
.data {
  background: #fff;
}

.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}
</style>

