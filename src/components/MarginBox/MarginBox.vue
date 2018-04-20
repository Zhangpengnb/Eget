<template>
  <div class="marginBox">
    <div class="epet-search">
      <div class="location">
        <a href="">
          <span>狗狗</span>
          <span>|</span>
          <span>重庆</span>
          <i class="btn"></i>
        </a>
      </div>
      <p class="search-text">
        <a href="">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="serach-ico"></span>
        </a>
      </p>
      <a href="" class="epet-category">
        <img src="/static/images/01%20(8).png" alt="">
      </a>
      <a href=""></a>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .marginBox
    padding  5px 10px
    .epet-search
      padding 8px 0
      .location
        box-sizing border-box
        width 20%
        position relative
        display inline-block
        margin-right 10px
      .search-text
        width 70%
        box-sizing border-box
        display inline-block
        position relative
      & input
        width 230px
        height 25px
        background: #e9e9e9
        border-radius 4px
        color #bcbcbc
        text-indent 10px
        font-size 13px
    .epet-category
      box-sizing border-box
      width: 10%
      margin-left -20px
      & img
        width 25px
        height 25px
        margin-left 4px
    .serach-ico
      display inline-block
      width 11px
      height 11px
      background-image url("/static/images/search-ico (1).png")
      background-size 11px auto
      position absolute
      top 7px
      right 20px
    .btn
      border-style: solid solid dotted;
      border-color: #898989 transparent transparent;
      border-width 4px
      position absolute
      top 5px
      right -10px
</style>
