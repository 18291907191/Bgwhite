<template>
  <section class="container">
    <header class="tc">
      <h2 class="pr"> <span>{{articleDetail.title?articleDetail.title: 'Article Detail'}}</span></h2>
    </header>
    <div class="article">
      <div class="md" v-html="articleDetail.content"></div>
      <p class="article-tip">
        <span v-show="articleDetail.tags !== undefined && articleDetail.tags.length > 0"> 标签：</span> <span v-for="(item,index) in articleDetail.tags" :key="index">{{item}}</span>
        <span class="article-time">{{articleDetail.update_time}}</span>
      </p>
      <ul class="article-msg">
        <li>作者：狗尾草</li>
        <li>出处：www.bgwhite.cn</li>
        <li>欢迎转载，但请标明出处。</li>
        <li>您的关注是我持久更新的动力。如果亲觉得文章有帮助的话，记得点个赞哦~</li>
        <li>点赞及评论功能暂未开通，有任何可能帮助到您的，请到<a style="color: #ffffff" href="www.cnblogs.com/bgwhite">狗尾草博客园</a>留下评论，或点击左上角qq交谈。</li>
      </ul>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import hljs from 'highlight.js'
import '@/assets/css/yeh-md-theme.css'
import '@/assets/css/ocean.min.css'
import moment from 'moment'
let marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

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
        this.articleDetail.content = marked(this.articleDetail.content);
        this.articleDetail.update_time = moment(res.update_time).format("YYYY-MM-DD HH:mm");
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
  .article-tip {
    margin-top: 10px;
  }
  .article-msg {
    width: 100%;
    height: auto;
    padding: 10px 15px 20px;
    border-radius: 10px;
    background-color: #3576e0;
    color: #ffffff;
    font-size: 14px;
    list-style: none;
    margin-top: 10px;
    li {
      line-height: 30px;
    }
  }
}
</style>
