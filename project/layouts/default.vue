<template>
  <div class="app">
    <my-header></my-header>
    <nuxt class="main loading-area"></nuxt>
  </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import {seo} from '../util/assist'

export default {
  components: {
    MyHeader,
  },
  methods: {
  },
  mounted(){
    //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
    seo()
  }
}
</script>
<style lang="less" scoped>
html,body {
  width: 100%;
  height: 100%;
}
#__nuxt {
  width: 100%;
  height: 100%;
}
#__layout {
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .main {
    background-color: #F7F8FA;
    width: 100%;
    flex: 1;
  }
  
}
</style>

