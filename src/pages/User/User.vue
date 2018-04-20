<template>
  <div class="html">
    <div class="body1">
      <div class="top">
        <a href="javascript:;" class="arrows"><span> &#139</span></a>
        <a href="javascript:;" class="register"><span>注册</span></a>
      </div>
      <div class="bottom">
        <a href="javascript:;" class="commonReg"><span>普通登录</span><i v-show="true"></i></a>
        <a href="javascript:;" class="phoneReg"><span>手机动态密码登录</span><i v-show="false"></i></a>
      </div>
    </div>
    <div v-show="true" class="body2">
      <div class="top">
        <span>&#9851</span>
        <input type="text" placeholder="手机号/邮箱/用户名">
      </div>
      <div class="top">
        <span>&#9775</span>
        <input type="text" placeholder="输入密码">
      </div>
      <div class="bottom">
        <p>忘记密码?</p>
        <span>登&nbsp;&nbsp;&nbsp;录</span>
      </div>
    </div>
    <div v-show="false" class="body2">
      <div class="top">
        <span>&#9851</span>
        <input type="text" placeholder="手机号/邮箱/用户名">
      </div>
      <div class="top">
        <span>&#9775</span>
        <input type="text" placeholder="输入图片内容">
        <img src="" alt="" class="code">
      </div>
      <div class="top">
        <span>&#9775</span>
        <input type="text" placeholder="动态密码">
        <button class="pwd">获取动态密码</button>
      </div>
      <div class="bottom">
        <p>忘记密码?</p>
        <span>登&nbsp;&nbsp;&nbsp;录</span>
      </div>
    </div>
    <div class="body3">
      <p>合作网站登录</p>
      <ul>
        <li><img src="./image/login_ico4.png" alt=""></li>
        <li><img src="./image/login_ico2.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .html
    display flex
    flex-direction column
    .body1
      width: 100%
      background url("./image/bg.png")
      background-size 100% 100%
      height 180px
      .top
        .arrows
          float left
          span
            font-size 40px
            margin 0 0 0 15px
            color white
        .register
          float right
          margin 18px 10px 0 0
          span
            font-size 15px
            color white
      .bottom
        margin-top 136px
        width: 100%
        height 44px
        line-height 44px
        text-align center
        background rgba(255,255,255,0.3)
        .commonReg
          float left
          display block
          width: 50%
          color white
          font-size 15px
          position relative
          i
            border-style: solid solid solid;
            border-color: transparent transparent  white;
            border-width 10px
            position absolute
            bottom  0px
            left 50%
            margin-left -10px
        .phoneReg
          float right
          display block
          width: 50%
          color white
          font-size 15px
          position relative
          i
            border-style: solid solid solid;
            border-color: transparent transparent  white;
            border-width 10px
            position absolute
            bottom  0px
            left 50%
            margin-left -10px
    .body2
      height 180px
      width 90%
      margin-left 5%
      .top
        display flex
        flex-direction row
        padding 8px 0
        border-bottom 1px solid #eee
        position relative
        span
          font-size 30px
          color #ccc
        input
          margin-left 10px
          width 50%
          outline none
        input::-webkit-input-placeholder
          color #ccc
          font-size 15px
        .pwd
          font-size 14px
          color red
          border 1px solid red
          padding 6px 5px
          border-radius 5px
          position absolute
          right 0
        .code
          width 85px
          height 30px
          background red
          position absolute
          right 0
      .bottom
        display flex
        flex-direction column
        p
          font-size 14px
          color #898989
          text-align right
          padding 13px 10px 10px 0
        span
          width 100%
          background #2ec975
          text-align center
          padding 12px 0
          color white
          border-radius 5px
  .body3
      margin-top 120px
      height 100px
      p
        color #d7d7d7
        text-align center
      ul
        width: 100%
        display flex
        flex-direction row
        li
          width 33.33%
          margin-top 5%
          img
            width: 50%
            margin-left 30%
</style>
