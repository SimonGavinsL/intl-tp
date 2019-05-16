<template>
  <div class="model">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="browse"><router-link to="/model/browse">Browse</router-link></a-menu-item>
          <a-menu-item key="model"><router-link to="/model/uploadmodel">Upload Model</router-link></a-menu-item>
          <a-menu-item key="attach"><router-link to="/model/attach">Upload Attachment</router-link></a-menu-item>
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

<script>

export default {
    name: 'Model'
}
</script>
