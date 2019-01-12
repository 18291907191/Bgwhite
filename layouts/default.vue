<template>
  <div class="app">
    <my-header></my-header>
    <nuxt class="main"></nuxt>
  </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import {seo} from '../util/assist'

export default {
  components: {
    MyHeader,
  },
  mounted(){
    //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
    seo()
  }
}
</script>
<style lang="less" scoped>
  .app {
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // overflow-y: auto;
    .main {
      background-color: #F7F8FA;
      height: 100%;
    }
  }
</style>

