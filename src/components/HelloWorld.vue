<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <a-carousel autoplay>
      <div>
        <img alt="1" src="https://www.tongji.edu.cn/images/20190518181413.jpg">
      </div>
      <div>
        <img alt="2" src="https://www.tongji.edu.cn/images/20190513092134.jpg">
      </div>
      <div>
        <img alt="3" src="https://www.tongji.edu.cn/images/20190513092141.jpg">
      </div>
      <div>
        <img alt="4" src="https://www.tongji.edu.cn/images/20190505084652.jpg">
      </div>
    </a-carousel>
  </div>
</template>
<script>
export default {
  props: {
    msg: String
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 580px;
  line-height: 160px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

img {
  height: 580px;
  width: 100%;
}
</style>