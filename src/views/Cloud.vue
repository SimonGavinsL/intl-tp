<template>
  <div class="cloud">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="overview"><router-link to="/cloud/overview">overview</router-link></a-menu-item>
          <a-menu-item key="container"><router-link to="/cloud/container">container</router-link></a-menu-item>
          <a-menu-item key="image"><router-link to="/cloud/image">image</router-link></a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content
        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </div>
</template>
