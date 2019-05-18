<template>
  <div id="modelbrowse">
    <h1>Find the models you're looking for.</h1>
    <a-input-search
      size="large"
      placeholder="input model name"
      style="width: 500px"
      @search="onSearch"
    />
    <br>
    <br>
    <span>Browse by filters</span>
    <div class="gutter-example">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="8">
          <div class="gutter-box">
            <a-cascader
              :options="options"
              :showSearch="{filter}"
              @change="changeLocation"
              style="width: 260px"
              placeholder="location"
            />
          </div>
        </a-col>
        <a-col class="gutter-row" :span="4">
          <div class="gutter-box">
            <a-select defaultValue style="width: 120px" @change="changePlatform">
              <a-select-option value="python">Python</a-select-option>
              <a-select-option value="r">R</a-select-option>
              <a-select-option value="sas">SAS</a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col class="gutter-row" :span="4">
          <div class="gutter-box">
            <a-select defaultValue style="width: 180px" @change="changeRoad">
              <a-select-option value="freeway">Freeway</a-select-option>
              <a-select-option value="intersection">Intersection</a-select-option>
              <a-select-option value="macro">Macro Level</a-select-option>
              <a-select-option value="arterial">Urban Arterial</a-select-option>
              <a-select-option value="express">Urban Expressway</a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <div class="gutter-box">
            <a-range-picker @change="changeDate"/>
          </div>
        </a-col>
      </a-row>
    </div>
    <br>
    <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card hoverable style="width: 300px">
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            slot="cover"
          >
          <!-- <img :alt="index" :src="item.src" slot="cover"> -->
          <template class="ant-card-actions" slot="actions">
            <a-icon type="setting"/>
            <a-icon type="edit"/>
            <a-icon type="ellipsis"/>
          </template>
          <a-card-meta :title="item.title" :description="item.desc">
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <!-- <a-avatar slot="avatar" :src="item.avatar"/> -->
          </a-card-meta>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import cities from "cities.json";

export default {
  name: "ModelBrowse",
  data() {
    return {
      options: [
        { value: "CN", label: "China", children: [] },
        { value: "GR", label: "Greece", children: [] },
        { value: "GB", label: "UK", children: [] },
        { value: "US", label: "US", children: [] }
      ],
      data: [
        // {
        //   title: String,
        //   desc: String,
        //   src: URL,
        //   avatar: URL
        // }
      ]
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    changeLocation(value, selectedOptions) {
      console.log(value, selectedOptions);
    },
    filter(inputValue, path) {
      return path.some(
        option =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
    },
    changePlatform(value) {
      console.log(`selected ${value}`);
    },
    changeRoad(value) {
      console.log(`selected ${value}`);
    },
    changeDate(date, dateString) {
      console.log(date, dateString);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  },
  mounted() {
    // Todo: Unable to search
    cities.forEach(element => {
      let i = ["CN", "GR", "GB", "US"].indexOf(element["country"]);
      if (i != -1) {
        this.options[i]["children"].push({
          value: element["name"].replace(" ", "").toLowerCase(),
          label: element["name"]
        });
      }
    });
  }
};
</script>

<style scoped>
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  padding: 5px 0;
}
</style>
