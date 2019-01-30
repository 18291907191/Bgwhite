<template>
  <div class="bdsharebuttonbox">
    <a href="#" class="bds_more" data-cmd="more"></a>
    <a href="#" class="bds_qzone" data-cmd="qzone"></a>
    <a href="#" class="bds_tsina" data-cmd="tsina"></a>
    <a href="#" class="bds_tqq" data-cmd="tqq"></a>
    <a href="#" class="bds_renren" data-cmd="renren"></a>
    <a href="#" class="bds_weixin" data-cmd="weixin"></a>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    setShare() {
      window._bd_share_config = {
        common: {
          bdSnsKey: {},
          bdText: '',
          bdMini: '2',
          bdMiniList: false,
          bdPic: '',
          bdStyle: '0',
          bdSize: '16'
        },
        slide: { type: 'slide', bdImg: '5', bdPos: 'left', bdTop: '250' },
        image: {
          viewList: ['qzone', 'tsina', 'tqq', 'renren', 'weixin'],
          viewText: '分享到：',
          viewSize: '16'
        },
        selectShare: {
          bdContainerClass: null,
          bdSelectMiniList: ['qzone', 'tsina', 'tqq', 'renren', 'weixin']
        }
      }
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src ="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' +~(-new Date() / 36e5)"
      document.body.appendChild(s)
    }
  },
  mounted() {
    this.setShare();
  }
}
</script>

