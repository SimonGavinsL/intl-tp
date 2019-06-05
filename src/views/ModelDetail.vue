<template>
  <div>
    <a-row>
      <a-col :span="8">
        <a-card hoverable style="width: 300px">
          <img
            alt="example"
            src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/freeways-lights.JPG?h=50844e28&itok=n4xZApyz"
            slot="cover"
          >
          <template class="ant-card-actions" slot="actions">
            <a-icon type="setting"/>
            <a-icon type="edit"/>
            <a-icon type="ellipsis"/>
          </template>
          <a-card-meta title="LA_Freeway_20150324" description>
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
export default {
  props: {
    imgSrc: String,
    name: String,
    description: String,
    road_type: String,
    statistical_type: String,
    functionality: String,
    nationality: String,
    city: String,
    create_time: Date,
    modified_time: Date
  },
  data() {
    return {
      data: [
        {
          key: "Description",
          //   value: this.description
          value: "LA Freeway is located in Los Angelos."
        },
        {
          key: "Road Type",
          //   value: this.road_type
          value: "Freeway"
        },
        {
          key: "Statistical Type",
          //   value: this.statistical_type
          value: "Poisson-gamma"
        },
        {
          key: "Functionality",
          //   value: this.functionality
          value: "Regression"
        },
        {
          key: "Country",
          //   value: this.nationality
          value: "US"
        },
        {
          key: "City",
          //   value: this.city
          value: "Los Angelos"
        },
        {
          key: "Created Time",
          //   value: this.create_time
          value: "2015-03-24"
        },
        {
          key: "Modified Time",
          //   value: this.modified_time
          value: "2018-06-16"
        }
      ],
      columns: [
        {
          title: "Key",
          dataIndex: "key",
          width: "30%"
        },
        {
          title: "Value",
          dataIndex: "value"
        }
      ]
    };
  }
};
</script>

