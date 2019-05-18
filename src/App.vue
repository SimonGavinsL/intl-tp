<template>
  <div id="app">
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo"/>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['home']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="home">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="data">
            <router-link to="/data">Data</router-link>
          </a-menu-item>
          <a-menu-item key="model">
            <router-link to="/model">Model</router-link>
          </a-menu-item>
          <a-menu-item key="cloud">
            <router-link to="/cloud">Cloud</router-link>
          </a-menu-item>
          <a-menu-item key="about">
            <router-link to="/about">About</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <br>
    <a-layout><router-view/></a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
