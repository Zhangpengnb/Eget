<template>
  <div class="footernav">
    <ul class="footernav_ul">
      <li class="index-a"><a href="http://localhost:8080/#/home"></a></li>
      <li class="type-a"><a href="http://localhost:8080/#/category"></a></li>
      <li class="cart-a"><a href="http://localhost:8080/#/shopping"></a></li>
      <li class="myepet-a"><a href="http://localhost:8080/#/user"></a></li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footernav_ul
    background-color: white;
    width 100%
    height: 45px;
    border-top 1px solid #ccc
    position fixed
    left 0
    right 0
    bottom 0
    justify-content space-around
    text-align center
    line-height 45px
  .footernav_ul li
    width 25%
    float left
    height 55px
  .footernav_ul li a
    display block
    background-image url("/static/images/img (1).png")
    background-size 234px 163px
    margin 0 auto
    height 40px
    width 42px
    margin-top 2px
  .type-a a
    background-position -85px -41px
  .cart-a a
    background-position -85px -81px
  .myepet-a a
    background-position -85px -122px
</style>
