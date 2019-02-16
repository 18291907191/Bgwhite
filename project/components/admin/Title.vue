<template>
  <p class="title">{{title}}</p>
</template>

<script>
export default {
  name: "AdminTitle",
  props: {
    title: String
  },
  data () {
    return {};
  }
};
</script>

<style lang="less">
.title {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #333;
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: -15px;
      width: 2px;
      height: 13px;
      background-color: #3576e0;
      border-radius: 1px;
    }
}
</style>
