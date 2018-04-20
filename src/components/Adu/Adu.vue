<template>
<div>
  <div>
    <img :src="img.value['0'].share_target.param.image" alt="">
  </div>
  <div class="ft12">
    <div>{{img.value['0'].share_target.param.title}}</div>
    <div>
      <span></span>
      <i>{{img.index}}</i>
      <span class="ml10 mr10">|</span>
      "{{img.value['0'].time}}"
    </div>
  </div>
</div>
</template>
<script>
  export default {
    props:{
      'img':Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ft12
    padding-bottom 20px
    padding-top 10px
    font-size 12px
  .ft12 div
    text-align center
    .ml10
      margin-left 10px
    .mr10
      margin-right 10px
</style>
