<template>
  <div class="app loading-area">
    <nuxt></nuxt>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer'

export default {
  components: {
    MyFooter
  },
}
</script>

<style lang="less">
.app {
    // background: rgb(38, 50, 56) no-repeat center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
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
</style>


