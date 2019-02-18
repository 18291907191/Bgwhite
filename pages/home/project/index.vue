<template>
  <section class="container">
    <div class="project">
      <div class="small-program">
        <div class="title">
          <h3>小程序项目</h3>
          <p>小程序项目请在微信或支付宝中查看</p>
        </div>
        <ul>
          <li v-for="i in 9">
            <div>
              <div class="cont">
                <p class="hd">医疗服务行业</p>
                <p class="left">安徽医科大学第二附属医院，提供在线挂号，预约，支付，住院等一些列功能，为便民化，医疗化做出重大贡献。</p>
              </div>
            </div>
            <a href="/" target="_Blank">模块的标题链接</a>
          </li>
        </ul>
      </div>
      <div class="public-program">
        <div class="title">
          <h3>公众号项目</h3>
          <p>以下程序请在移动端微信处打开</p>
        </div>
        <ul>
          <li v-for="i in 5">
            <div>
              <div class="cont">
                <p class="hd">医疗服务行业</p>
                <p class="left">安徽医科大学第二附属医院，提供在线挂号，预约，支付，住院等一些列功能，为便民化，医疗化做出重大贡献。</p>
              </div>
            </div>
            <a href="/" target="_Blank">模块的标题链接</a>
          </li>
        </ul>
      </div>
      <div class="vue-program">
        <div class="title">
          <h3>vue项目</h3>
        </div>
        <ul>
          <li>
            <div>
              <div class="cont">
                <p class="hd">医疗器材销售行业</p>
                <p class="left">为广大医院提供销售器材为主，为医疗设施的普及含有重大意义。</p>
              </div>
            </div>
            <a href="/" target="_Blank">赛泰克官网</a>
          </li>
          <li>
            <div>
              <div class="cont">
                <p class="hd">医疗器材销售行业</p>
                <p class="left">赛泰克项目管理</p>
              </div>
            </div>
            <a href="/" target="_Blank">赛泰克管理后台</a>
          </li>
          <li>
            <div>
              <div class="cont">
                <p class="hd">医疗服务行业</p>
                <p class="left">医疗服务行业医院端，为医院提供技术现代化，如远程会诊，转诊，在线支付，预约挂号，住院，等已便民服务为宗旨，持续努力中。</p>
              </div>
            </div>
            <a href="/" target="_Blank">佰医汇医疗系统医院端</a>
          </li>
        </ul>
      </div>
      <div class="nuxt-pogram">
        <div class="title">
          <h3>Nuxt项目</h3>
        </div>
        <ul>
          <li>
            <div>
              <div class="cont">
                <p class="hd">SSR博客系统</p>
                <p class="left">Nuxt.js+Vue.js+node.js+Mysql技术栈搭建SSR个人博客系统</p>
              </div>
            </div>
            <a href="/" target="_Blank">狗尾草的前端博客</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layouts: 'login'
}
</script>
<style lang="less" scoped>
.project {
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(100, 100, 100, 0.4);
    padding: 20px 30px;
    .small-program,.public-program,.vue-program,.nuxt-pogram {
      .title {
        box-sizing: border-box;
        padding-left: 24px;
        p {
          font-size: 14px;
          color: #666666;
        }
      }
      ul {
        display: flex;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        box-sizing: border-box;
        li {
          list-style: none;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          width: 20%;
          box-sizing: border-box;
          margin: 27px;
          border-radius: 2px;
          overflow: hidden;
          transition: all ease-in 0.1s;
          &:hover {
              box-shadow: 0 0 20px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1);
              .cont {
                display: block;
                background: rgba(0,0,0,0.5);
                .hd {
                  transform: translateY(5px);
                }
                .left {
                  transform: translateX(0);
                }
              }
          }
          div {
            height: 160px;
            background-image: url("https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture") no-repeat center;
            background-size: cover;
            .cont {
              width: 100%;
              height: 100%;
              text-align: center;
              box-sizing: border-box;
              padding: 10px 20px;
              text-align: left;
              color: #fff;
              .hd {
                transition: .5s;
                font-size: 14px;
                transform: translateY(-100px);
              }
              .left {
                transition: .5s;
                font-size: 12px;
                transition-delay: .5s;
                margin-top: 10px;
                transform: translateX(-300px);
              }
            }
          }
          a {
            display: block;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            color: #fff;
            background: #4fc08d;
            text-align: center;
            text-decoration: none;
            &:hover {
              color: #333333;
            }
          }
        }
      } 
    }
}
</style>
