<template>
  <div class="custom_tite" style="height: 80px;">
    <div class="titmoudle">
      <div class="leftimg">
        <img :src="img" alt="">
      </div>
      <div class="more more2">
        <img src="/static/images/init_22.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      'img': String
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .titmoudle
    position relative
    .leftimg img
      margin: 0 auto 0 10px;
      width 50%
    .more2
      margin-top 20px

</style>
