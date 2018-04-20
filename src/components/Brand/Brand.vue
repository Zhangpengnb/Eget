<template>
 <div>
   <div class="title">
     <span class="c999">—— 推荐品牌 ——</span>
     <div class="list">
       <ul class="clearfix">
         <li>
           <a href="">
             <div class="imgBox">
               <img class="imgs" src="./3b236d1731bd91004bffcec3515e1a0a.jpg" alt="">
             </div>
             <p class="name">冠能</p>
             <p class="address">美国</p>
           </a>
         </li>
       </ul>
       <Split/>
     </div>
   </div>
 </div>
</template>
<script>
  export default {
    props:{
      "brands":{},
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .title
    padding-top 20px
    font-size 12px
    text-align center
    .c999
      color #999
  .list
    padding 0 5px
    .clearfix:after
      content "."
      display block
      height 0
      clear both
      visibility hidden
    ul
      list-style none
      margin-bottom 20px
      li
        box-sizing border-box
        margin-top 20px
        width 33.33%
        padding 0 5px
        float left

  .imgs
    width 80px
    height 40px
  .imgBox
    border 1px solid #e2e2e2
    padding  10px 0
  .name
    height 20px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 13px
    margin-top 5px
    color #333
  .address
    height 20px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 12px
    color #999
</style>
