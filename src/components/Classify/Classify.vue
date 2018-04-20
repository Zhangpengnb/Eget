<template>
  <div class="list">
    <div class="list_left">
      <ul>
        <li class="on">为您推荐</li>
        <li>e宠国际</li>
        <li>去充去毛</li>
        <li>外出清洁</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
        <li>狗狗主粮</li>
      </ul>
    </div>
    <div class="list_right">
      <div class="right_tittle">
        <span>狗狗主粮</span>
        <img src="./images/1.png" alt="">
      </div>
      <ul>
        <li>
          <img src="./images/2.jpg" alt="">
          <span>处方量</span>
        </li>
        <li>
          <img src="./images/2.jpg" alt="">
          <span>处方量</span>
        </li>
        <li>
          <img src="./images/2.jpg" alt="">
          <span>处方量</span>
        </li>
        <li>
          <img src="./images/2.jpg" alt="">
          <span>处方量</span>
        </li>
        <li><img src="./images/2.jpg" alt=""></li>
        <li><img src="./images/2.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.list_left',{
        scrollX: false,
        scrollY: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .list
    height 100%
    .list_left
      border-right: 5px solid #f3f4f5;
      position fixed
      top 40px
      width 70px
      height 100%
      ul
        text-align center
        height 120%
        li
          box-sizing border-box
          width 70px
          height 50px
          line-height 20px
          font-size 13px
          padding 15px 0
          text-overflow ellipsis
          white-space nowrap
          &.on
            color red
            background #f3f4f5
    .list_right
      margin-left 75px
      border-top 5px solid #f3f4f5
      .right_tittle
        display flex
        justify-content space-between
        margin-top 10px
        padding 0 10px
        span
          font-size 12px
        img
          width 46px
          height 10px
      ul
        display flex
        flex-wrap wrap
        li
          box-sizing border-box
          padding 5px
          width 33.3333%
          margin-top 20px
          text-align center
          span
            font-size 13px
</style>
