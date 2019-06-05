<template>
  <div>
    <a-row>
      <a-col :span="8">
        <a-card hoverable style="width: 300px">
          <img alt="example" :src="imgSrc" slot="cover">
          <template class="ant-card-actions" slot="actions">
            <a-icon type="setting"/>
            <a-icon type="edit"/>
            <a-icon type="ellipsis"/>
          </template>
          <a-card-meta :title="modelName" description>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="15">
        <a-table :columns="columns" :dataSource="data"></a-table>
      </a-col>
    </a-row>
    <a-row></a-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imgSrc: "",
      modelName: "",
      dataSource: {},
      data: [
        { key: "Description", value: "" },
        { key: "Road Type", value: "" },
        { key: "Statistical Type", value: "" },
        { key: "Functionality", value: "" },
        { key: "Platform", value: "" },
        { key: "Country", value: "" },
        { key: "City", value: "" },
        { key: "Created Time", value: "" },
        { key: "Modified Time", value: "" }
      ],
      columns: [
        { title: "Key", dataIndex: "key", width: "30%" },
        { title: "Value", dataIndex: "value" }
      ]
    };
  },
  mounted() {
    axios
      .get(this.$hostname + "model/" + this.$route.params.id)
      .then(response => {
        // handle success
        this.dataSource = response["data"]["response"];
        this.modelName = this.dataSource["name"];
        this.imgSrc =
          this.$hostname + "model/" + this.$route.params.id + "/image";
        this.data[0]["value"] = this.dataSource["description"];
        this.data[1]["value"] = this.dataSource["road_type"];
        this.data[2]["value"] = this.dataSource["statistical_type"];
        this.data[3]["value"] = this.dataSource["functionality"];
        this.data[4]["value"] = this.dataSource["platform"];
        this.data[5]["value"] = this.dataSource["nationality"];
        this.data[6]["value"] = this.dataSource["city"];
        this.data[7]["value"] = this.dataSource["create_time"];
        this.data[8]["value"] = this.dataSource["modified_time"];
        console.log("success");
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
        console.log("finally");
      });
  }
};
</script>

