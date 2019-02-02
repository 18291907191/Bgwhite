<template>
<!--S 首页 -->
  <div class="container loading-area">
      <no-ssr><vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles></no-ssr>
      <nuxt/>
  </div><!--E 首页 -->
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
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
.lizi {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
