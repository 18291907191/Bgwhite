<template>
<!-- Home Article -->
  <section class="container">
    <header class="tc">
      <!-- <h2 class="pr"> <span>Articles</span></h2> -->
    </header>
    <ul class="article">
      <li v-for="(item,index) in articleList" :key="index">
        <div class="cont-img">
          <img :src="item.imgTitle" :alt="item.tags">
        </div>
        <div class="cont-txt">
          <nuxt-link class="cont-tit" :to="`home/article_detail/${item.id}`">{{item.title}}</nuxt-link>
          <p>{{item.desc}}
          </p>
          <ul class="tags">
            标签:
            <a v-for="(ele,i) in item.tags" :key="i">
              {{ele.name}}
            </a>
          </ul>
        </div>
      </li>
    </ul>
  </section>  
</template>
<script>
export default {
  data() {
    return {
      articleList: [
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
                {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
        {
          title: 'js为什么能成为当红明星？',
          imgTitle: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1569746487,5778137&fm=27&gp=0.jpg',
          desc: 'node.js底层有c++书写，搭载在浏览器中，v8引擎让js一跃成为当红明星，不用再受限制',
          tags: [
            {name:'node.js',tagsId:'node'},
          ]
        },
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // overflow-y: auto;
  // display: flex;
  // flex-direction: column;
  // align-content: center;
}
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
    display: block;
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
    padding: 20px 30px;
    li {
      padding: 20px 30px;
      display: flex;
      border-bottom: 1px solid #f7f8fa;
      .cont-img {
        width: 260px;
        height: 180px;
        margin-right: 20px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .cont-txt {
        box-sizing: border-box;
        width: 100%;
        height: 180px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .cont-tit {
          color: #3084bb;
          font-size: 18px;
          text-decoration: none;
          margin-bottom: 30px;
          &:hover {
            text-decoration: underline;
          }
        }
        p {
          width: 100%;
          flex: 1;
          overflow: hidden;
          padding: 0 20px 10px 0;
          font-size: 16px;
          line-height: 24px;
          color: #555;
          text-indent: 28px;
        }
        .tags {
          width: 100%;
          height: 30px;
          line-height: 30px;
          a {
            color: #999;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
