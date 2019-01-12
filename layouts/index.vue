<template>
<!--S 首页 -->
  <div class="container">
  <!--S 粒子特效组件 -->
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="100"
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
      class="lizi">
      </vue-particles><!--E 粒子特效组件 -->
      <nuxt />
  </div><!--E 首页 -->
</template>
<script>
export default {
  components: {
  },
}
</script>

<style lang="less" scoped>
@bg-black: #263238;
.container {
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: @bg-black;
  .lizi {
    width: 100%;
    height: 100%;
  }
}
</style>
