<template>
  <section :class="cname">
    <swiper :options="options" :not-next-click="options.notNextClick">
      <swiper-slide v-for="item of items" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.src">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>


<script>
/*  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'*/

  export default {
    /*components: {
      swiper,
      swiperSlide
    },*/
    props: {
      cname: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default() {
          return {
            autoplay: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            notNextClick: false
          }
        }
      },
      items: {
        type: Array,
        default() {
          return {

          }
          /*[{href:'' ,src: ''}]*/
        }
      }
    },
    data() {
      return {
        msg: 'hello vue!'
      }
    }
  }
</script>


 /* !*官方指定的swiper 样式路径*!*/
<style lang="css">
 /* @import "~swiper/dist/css/swiper.css";*/
</style>
