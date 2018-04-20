<template>
  <div class="allmodule module">
    <div>
      <div class="banner_item">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(img,index) in imgs" :key="index" class="swiper-slide" >
              <a href="">
                <img :src="img.image" alt="">
              </a>
            </div>
          </div>
          <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props:{
      'imgs':Array
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.swiper-pagination-bullet
  background: #fff;
  opacity: .9;
  transition: all .25s ease
.swiper-pagination-bullet-active
  width 16px
  border-radius 30px
</style>
