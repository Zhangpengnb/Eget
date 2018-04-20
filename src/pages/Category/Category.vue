<template>
  <div>
    <div class="tittle">
      <div class="tittle_left" :class="{on:$routue.path ==='/category/classify'}">
        <router-link to="/category/classify">
          <span>分类</span>
        </router-link>
      </div>
      <div class="tittle_right" :class="{on:$routue.path ==='/category/brand'}">
        <router-link to="/category/brand">
          <span>品牌</span>
        </router-link>
      </div>
      <img src="./images/1.png" alt="">
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import ListTittle from '../../components/ListTittle/ListTittle'
  import Classify from '../../components/Classify/Classify'
  import Brand from '../../components/Brand/Brand'
  export default {
    data(){
      return{
        isShow:true
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tittle
    bottom-border-1px(#cbcbcb)
    height 40px
    img
      width 14px
      height 14px
      position absolute
      top 13px
      right 10px
    .tittle_left
      display inline-block
      box-sizing border-box
      text-align right
      line-height 40px
      font-size 13px
      width 49%
      padding-right 5%
    .tittle_right
      display inline-block
      box-sizing border-box
      text-align left
      line-height 40px
      font-size 13px
      width 49%
      padding-left 5%
    .on
      span
        display inline-block
        width 26px
        height 40px
        padding 0 4px
        color red
        border-bottom 1px solid red
</style>
