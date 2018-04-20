<template>
  <div>
    <Overflow/>
    <div class="main">
      <MarginBox/>
      <div v-if="index.menus">
        <Find_nav :menus="index.menus"/>
      </div>
      <div class="allmodule module">
        <div v-if="carousel.data">
          <Swp :imgs="carousel.data[1].value"/>
        </div>
        <div>
          <div class="columnnavdiv">
            <div>
              <ul class="hottype" v-if="index.datas">
                <li  v-for="(menu,index) in index.datas['1'].menus" :key="index">
                  <a href="">
                    <img :src="menu.image" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="banner_item">
            <a href="">
              <img v-if="carousel.data" :src="carousel.data['2438'].value['0'].image" alt="">
            </a>
          </div>
        </div>
        <div>
          <div class="surprise_day">
            <div class="surprise">
              <div class="surprise-tit">
                <div class="titimg">
                  <img src="/static/images/01%20(9).png" alt="">
                </div>
                <div class="nexttip">下一场开始</div>
                <div class="time">
                  <span class="time1-1">14</span>
                  <span class="time-m">:</span>
                  <span class="time1-1">00</span>
                </div>
                <div class="more">
                  <a href="">
                    <img src="/static/images/init_22.jpg" alt="">
                  </a>
                </div>
              </div>
              <div class="bscroll"  v-if="carousel.data">
                <div class="flexBox" v-if="carousel.data['3']">
                  <div v-for="(good,index) in carousel.data['3'].goods" :key="index"><img :src="good.image.image" alt=""></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        <div v-if="index.datas">
          <img :src="index.datas['7'].value['0'].image" alt="">
        </div>
        <Split/>
        <div v-if="index.datas">
          <Title :img="index.datas['14'].value.left.img.image"/>
        </div>
        <div v-if="index.datas">
          <Adu :img="index.datas['10']"/>
        </div>
        <Split/>
        <div class="flexBox2">
          <div v-if="carousel.data">
            <img :src="carousel.data[3110].content_images[0][0].image" alt="">
            <img :src="carousel.data[3110].content_images[0][1].image" alt="">
          </div>
          <div v-if="carousel.data">
            <img :src="carousel.data[3110].content_images[1][0].image" alt="">
            <img :src="carousel.data[3110].content_images[1][1].image" alt="">
          </div>
        </div>
        <Split/>
        <div v-if="index.datas">
          <Title :img="index.datas['14'].value.left.img.image"/>
        </div>
        <img v-if="index.datas" :src="index.datas['21'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['23'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['25'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['27'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['29'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['31'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['33'].content_images[0][0].image" alt="">
        <Split/>
        <img v-if="index.datas" :src="index.datas['35'].content_images[0][0].image" alt="">
        <Split/>
        <div v-if="index.datas">
          <Title :img="index.datas['46'].value.left.img.image"/>
        </div>
        <div v-if="index.datas">
          <Adu :img="index.datas['47']"/>
        </div>
        <Split/>
        <div v-if="index.datas">
          <Title :img="index.datas['49'].value.left.img.image"/>
        </div>
        <div v-if="index.datas">
          <Adu :img="index.datas['50']"/>
        </div>
        <Foot/>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Overflow from '../../components/Overflow/Overflow.vue'
  import MarginBox from '../../components/MarginBox/MarginBox.vue'
  import Find_nav from '../../components/Find_nav/Find_nav.vue'
  import Swp from '../../components/Swp/Swp.vue'
  import Bscroll from 'better-scroll'
  import Title from '../../components/Title/Title.vue'
  import Adu from '../../components/Adu/Adu.vue'
  import Foot from '../../components/Foot/Foot'
  export default {
    mounted(){
      this.$store.dispatch('getIndex');
      this.$store.dispatch('getCarousel')

    },
    computed:{
      ...mapState(['index','carousel'])
    },
    components:{
      Overflow,
      MarginBox,
      Find_nav,
      Swp,
      Title,
      Adu,
      Foot
    },
    watch:{
      carousel (value){
        this.$nextTick(() => { // 回调函数在DOM更新之后立即调用
          new Bscroll('.bscroll',{
            scrollX:true,
            click:true
          })
        })
      }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
body
  font-size 14px
.hottype
  width 100%
  display flex
  flex-flow wrap
  & li
    width: 20%
.surprise-tit
  position relative
  padding 10px
  .titimg img
    width 85px
    height: 19px
  .titimg
    display inline-block
  .nexttip
    display inline-block
    position: absolute;
    right: 107px;
    margin-right: 5px;
  .time
    display inline-block
    position: absolute;
    right: 55px;
    .time1-1
      border: 1px solid #ddd;
      padding: 1px 2px;
      font-size: 13px;
.more
  position absolute
  width 40px
  right 0
  top 10px
  .more img
    width 50%
.flexBox
  width 120%
  height 130px
  display flex
  .flexBox div
    flex 1
  .flexBox img
    width 100%
.bscroll
  overflow hidden
.flex
  display flex
.flex div
  width 50%
  .dog
    height auto
.flexBox2
  width 100%
  height 200px
  display flex
.flexBox2 div
  height 100px
  width 50%
</style>
