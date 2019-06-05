<template>
  <iframe src="http://localhost:3000/images" id="cloud-image" frameborder="0" width="100%" height="100%"
          style="position:absolute;top:80px;left: 150px;"></iframe>
</template>

<script>
export default {
  name: 'CloudImage',
  data () {
    return {}
  },
  mounted () {
    function changeMobsfIframe () {
      const mobsf = document.getElementById('cloud-image')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = (Number(deviceWidth) - 150) + 'px'
      mobsf.style.height = (Number(deviceHeight) - 80) + 'px'
    }

    changeMobsfIframe()

    window.onresize = function () {
      changeMobsfIframe()
    }
  },
}
</script>
