<template>
<!--S 首页 路由面板 -->
  <div class="main">
    <h3>狗尾草的前端博客</h3>
    <div class="hd-img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532412479772&di=054181aa27a78980933091e0fd338d3f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201409%2F21%2F20140921125932_2mAvm.thumb.700_0.jpeg" alt="狗尾草的前端博客"></div>
    <div class="links">
      <nuxt-link to="/home" title='狗尾草的前端博客'>Blog</nuxt-link><span>|</span>
      <a href="https://www.cnblogs.com/bgwhite" title='狗尾草的博客园'>CSDN</a><span>|</span>
      <a href="https://www.jianshu.com/u/69941f570736" title='狗尾草的简书'>Easy Book</a><span>|</span>
      <a href="https://app.yinxiang.com/Home.action#n=0d1b5835-b81b-4d8d-bb7f-3bf02fbb8243&s=s48&ses=4&sh=2&sds=5&" title='狗尾草的笔记'>Evernote</a>
    </div>
  </div><!--E 路由面板 -->
</template>
<script>
export default {
  layout: 'index',
  components: {
  },
}
</script>

<style lang="less" scoped>
@bg-black: #263238;
.main {
  width: 100%;
  height: auto;
  position: fixed;
  top: 25%;
  color: #888;
  padding: 20px 0;
  box-shadow: 0px 0px 5px #999;
  background-color: rgba(38,50, 56, .9);
  h3 {
    margin-bottom: 10px;
  }
  .hd-img {
    width: 100%;
    height: 90px;
    margin-bottom: 20px;
    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      box-shadow: 0px 0px 3px #fff;
    }
  }
  .links {
    a {
      color: #777;
      font-size: 18px;
      text-decoration: none;
      margin: 0 20px;
      &:hover {
        color:rgba(250, 250, 250, 1);
        text-shadow: 0px 0px 2px #fff;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .links {
    display: flex;
    flex-direction: column;
  }
}
</style>
