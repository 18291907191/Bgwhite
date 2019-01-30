<template>
  <section class="container">
    文章详情
  </section>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  created() {
    console.log(this.$route.params.id);
  }
}
</script>
<style lang="less" scoped>

</style>
