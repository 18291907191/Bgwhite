<template>
  <header>
    <div class="hd df-sb">
      <h3>
        <img class="csp" @click="jump()" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532412479772&di=054181aa27a78980933091e0fd338d3f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201409%2F21%2F20140921125932_2mAvm.thumb.700_0.jpeg" title="狗尾草">
        狗尾草的前端博客
      </h3>
      <div class="panel">
        <p>坐标 西安 | 天气 小雨</p>
        <p>公告</p>
        <p>网站正建设中，即将完成，敬请期待</p>
      </div>
    </div>
    <div class="nav">
      <div class="menu">
        <nuxt-link to="/home">Home</nuxt-link>
        <nuxt-link to="/home/about">About</nuxt-link>
        <nuxt-link to="/home/project">Project</nuxt-link>
        <nuxt-link to="/home/tools">Tools</nuxt-link>
        <nuxt-link to="/gitHub">GitHub</nuxt-link>
        <nuxt-link to="/manage">Manage</nuxt-link>
      </div>
      <div class="search">
        <input type="text" v-model="searchContent" @keyup.enter="search(searchContent)"><button @click="search(searchContent)">Search</button>
      </div>
    </div>
  </header>  
</template>
<script>
export default {
  data() {
    return {
      searchContent: '',
    }
  },
  methods: {
    search(data) {
      this.$store.commit('setSearch',data);
    },
    jump() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @bg-black: #263238;
  header {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 50px;
    background-color: @bg-black;
    .hd {
      color: rgba(250, 250, 250, 0.85);
      .panel {
        width: 356px;
        text-align: left;
        line-height: 30px;
      }
    }
    h3 {
      font-size: 56px;
      color: rgba(250, 250, 250, 0.85);
      display: flex;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
    .nav {
      width: 100%;
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .menu {
        display: flex;
      }
      a {
        color: #777;
        text-decoration: none;
        font-size: 24px;
        margin: 0 16px;
        &:hover {
          color:rgba(250, 250, 250, 1);
        }
      }
    }
    .search {
      input {
        width: 300px;
        height: 32px;
        line-height: 32px;
        border: 2px solid rgba(250, 250, 250, 0.4);
        font-size: 14px;
        background-color: transparent;
        color: #ffffff;
        text-indent: 10px;
        outline: none;
        vertical-align: middle;
      }
      button {
        display: inline-block;
        padding: 0 10px;
        height: 32px;
        line-height: 28px;
        outline: none;
        background-color: transparent;
        color: #ffffff;
        border: 2px solid rgba(250, 250, 250, 0.4);
        border-left: 0;
        cursor: pointer;
      }
    }
  }
@media screen and (max-width: 960px) {
    header {
      padding: 0;
    h3 {
      font-size: 16px;
      color: rgba(250, 250, 250, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto;
      }
    }
    .nav {
      width: 100%;
      margin-top: 15px;
      flex-direction: column;
      a {
        color: #777;
        text-decoration: none;
        font-size: 14px;
        margin: 0 8px;
        &:hover {
          color:rgba(250, 250, 250, 1);
        }
      }
    }
    .search {
      width: 80%;
      padding: 10px 0;
      input {
        width: 80%;
        height: 32px;
        line-height: 32px;
        border: 2px solid rgba(250, 250, 250, 0.4);
        font-size: 14px;
        background-color: transparent;
        color: #ffffff;
        text-indent: 10px;
        outline: none;
        vertical-align: middle;
      }
      button {
        display: inline-block;
        padding: 0 10px;
        height: 32px;
        line-height: 28px;
        outline: none;
        background-color: transparent;
        color: #ffffff;
        border: 2px solid rgba(250, 250, 250, 0.4);
        border-left: 0;
        cursor: pointer;
      }
    }
  }
}
</style>
