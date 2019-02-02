<template>
  <div class="admin">
    <my-header></my-header>
    <div class="section">
      <side-menu></side-menu>
      <div class="main">
        <nuxt></nuxt>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/admin/Header.vue'
import SideMenu from '../components/admin/SideMenu.vue'

export default {
  components: {
    MyHeader,
    SideMenu
  }
}
</script>

<style lang="less" scoped>
.admin {
  width: 100%;
  height: 100%;
  min-width: 960px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .section {
    width: 100%;
    flex: 1;
    display: flex;
    .main {
      flex: 1;
      overflow-y: auto;
      padding: 0 50px;
    }
  }
}


</style>

<style>
.admin ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #F5F5F5;
}

.admin ::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: rgba(100, 100, 100, 0.2);
  box-shadow: 0 0 6px rgba(100, 100, 100, 0.2);
}

.admin ::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: rgba(100, 100, 100, 0.6);
}
</style>



