<template>
  <div class="data">
    <br>
    <a-row type="flex" justify="space-around">
      <a-col :span="4">
        <div class="clearfix">
          <a-upload
            :fileList="fileList"
            :remove="handleRemove"
            :beforeUpload="beforeUpload"
            accept=".csv"
          >
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
import axios from "axios";
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
      fileResult: {},
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
      this.dataSource = [];
    },
    buildSource(source) {
      source.forEach((element, index) => {
        this.dataSource.push({
          key: index,
          name: element,
          type: "",
          unit: "",
          desc: ""
        });
      });
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      Papa.parse(file, {
        // Arrow function, lexical scoping
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        complete: results => {
          console.log(results);
          this.fileResult = results["data"];
          this.buildSource(this.fileResult[0]);
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

      const indexName = this.fileList[0].name.slice(0, -4).replace(" ", ""); // Remove .csv and blankspaces
      const baseURL = "http://localhost:9200/"; // Should set to serverside ES address after production
      axios
        .put(baseURL + indexName + "?pretty") // Create an index
        .then(response => {
          console.log(response);

          // Upload data
          this.fileResult.forEach((element, index) => {
            if (index != 0) {
              let value = {};
              element.forEach((element2, index2) => {
                value[this.dataSource[index2].name] =
                  this.dataSource[index2].type === "char"
                    ? element2
                    : parseFloat(element2); // parseFloat() will parse a string to an integer if so
              });
              axios
                .put(baseURL + indexName + "/_doc/" + index + "?pretty", value)
                .then(response => {
                  console.log(response);
                })
                .catch(error => {
                  console.log(error);
                });
            }
          });

          // Upload data file specs
          this.dataSource.forEach((element, index) => {
            axios
              .put(
                baseURL + indexName + "/_doc/" + (-1 - index) + "?pretty",
                element
              )
              .then(response => {
                console.log("element: ", element);
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              });
          });
        })
        .catch(error => {
          this.uploading = false;
          this.dataSource = [];
          console.log(error);
        });
      this.fileList = [];
      this.uploading = false;
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
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

