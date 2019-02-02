<template>
  <header>
    <nuxt-link to="/" class="nav-left">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532412479772&di=054181aa27a78980933091e0fd338d3f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201409%2F21%2F20140921125932_2mAvm.thumb.700_0.jpeg" />
      <span>狗尾草的前端博客</span>
    </nuxt-link>
    <nuxt-link to="">退出</nuxt-link>
  </header>
</template>

<style lang="less" scoped>
header {
  background: #1b8afa;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
  font-size: 18px;
  color: #fff;
  a {
    color: rgba(250, 250, 250, 0.8);
    text-decoration: none;
  }
  .nav-left {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      border-radius: 100%;
      margin-right: 20px;
    }
  }
}
</style>
