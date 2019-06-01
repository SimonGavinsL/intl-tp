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
            <a-select
              @change="handleProvinceChange"
              showSearch
              optionFilterProp="children"
              style="width: 120px; margin-right: 20px;"
              @focus="handleFocus"
              @blur="handleBlur"
              :filterOption="filterOption"
            >
              <a-select-option v-for="country in countryData" :key="country">{{country}}</a-select-option>
            </a-select>
            <a-select
              v-model="secondCity"
              showSearch
              optionFilterProp="children"
              style="width: 200px"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :filterOption="filterOption"
            >
              <a-select-option v-for="city in cities" :key="city">{{city}}</a-select-option>
            </a-select>
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
          <!-- <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            slot="cover"
          >-->
          <img :alt="index" :src="item.image" slot="cover">
          <template class="ant-card-actions" slot="actions">
            <a-icon type="setting"/>
            <a-icon type="edit"/>
            <a-icon type="ellipsis"/>
          </template>
          <a-card-meta :title="item.name" :description="item.description">
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
import axios from "axios";

export default {
  name: "ModelBrowse",
  data() {
    return {
      countryData: ["CN", "GR", "GB", "US"],
      cityData: {
        CN: [],
        GR: [],
        GB: [],
        US: []
      },
      cities: [],
      secondCity: "",
      dataSource: [],
      data: []
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    handleProvinceChange(value) {
      this.cities = this.cityData[value];
      this.secondCity = this.cityData[value][0];
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
    changePlatform(value) {
      // console.log(`selected ${value}`);
      this.data = this.dataSource.filter(
        element => element["platform"] === value
      );
    },
    changeRoad(value) {
      // console.log(`selected ${value}`);
      this.data = this.dataSource.filter(
        element => element["road_type"] === value
      );
    },
    changeDate(date, dateString) {
      // console.log(date, dateString);
      this.data = this.dataSource.filter(element => {
        let created = new Date(element["create_time"]);
        let modified = new Date(element["modified_time"]);
        let start = new Date(dateString[0]);
        let end = new Date(dateString[1]);

        return (
          (created >= start && created <= end) ||
          (modified >= start && modified <= end)
        );
      });
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

    axios
      .get(this.$hostname + "model/")
      .then(response => {
        // handle success
        this.dataSource = response["data"]["response"];
        this.data = this.dataSource;
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

<style scoped>
.gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  padding: 5px 0;
}
</style>
