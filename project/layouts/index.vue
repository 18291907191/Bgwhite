<template>
<!--S 首页 -->
  <div class="container">
    <!-- <Background :point="point" :lineColor="lineColor" :roundColor="roundColor"></Background> -->
      <nuxt />
  </div><!--E 首页 -->
</template>
<script>
import Background from '@/components/Background.vue'
export default {
  components: {
    Background
  },
  data() {
    return {
      point: 80,
      lineColor: "#ffffff",
      roundColor: "#ffffff"
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1000;
  background-color: rgba(38,50, 56, 1);
  background-image: url("https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture");
}
</style>
