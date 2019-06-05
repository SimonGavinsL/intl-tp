<template>
  <iframe
    src="http://localhost:3000/overview"
    id="cloud-overview"
    frameborder="0"
    width="100%"
    height="100%"
    style="position:absolute;top:80px;left: 150px;"
  ></iframe>
</template>

<script>
export default {
  name: "CloudOverview",
  data() {
    return {};
  },
  mounted() {
    function changeMobsfIframe() {
      const mobsf = document.getElementById("cloud-overview");
      const deviceWidth = document.body.clientWidth;
      const deviceHeight = document.body.clientHeight;
      mobsf.style.width = Number(deviceWidth) - 150 + "px";
      mobsf.style.height = Number(deviceHeight) - 80 + "px";
    }

    changeMobsfIframe();

    window.onresize = function() {
      changeMobsfIframe();
    };
  }
};
</script>
