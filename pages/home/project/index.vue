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
    .small-program {
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
