<template>
  <section class="container">
    <header class="tc">
      <h2 class="pr"> <span>{{articleDetail.title?articleDetail.title: 'Article Detail'}}</span></h2>
    </header>
    <div class="article" v-html="articleDetail.content"></div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      articleDetail: {},
    }
  },
  methods: {
    getDetail() {
      axios.get(`/article/api/v1/detail/${this.$route.params.id}`)
      .then(res => {
        if(!res) {
          return false;
        }
        this.articleDetail = res;
      })
    }
  },
  created() {
    this.getDetail();
  }
}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  padding: 20px 0;
  h2 {
    &::before {
      content: ' ';
      display: inline-block;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 2px;
      background-color: #333;
    }
    span {
      display: inline-block;
      position: relative;
      padding: 0 15px;
      background-color: #F7F8FA;
      z-index: 2;
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        left: -15px;
        top: 0;
        width: 2px;
        height: 30px;
        background-color: #333;
      }
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        right: -15px;
        top: 0;
        width: 2px;
        height: 30px;
        background-color: #333;
      }
    }
  }
}
.article {
  width: 80%;
  margin: 0 auto;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
  padding: 20px 30px;
}
</style>
