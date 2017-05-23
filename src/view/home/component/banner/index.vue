<template>
  <div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerData">
              <img v-if="item.picture" :src="item.picture"  />
              <img v-else :src="item.PictureWebp"/>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import '@/lib/swiper/swiper.css'
import '@/lib/swiper/swiper.js'
export default {
  name: 'banner',
  props: ['bannerData'],
  data () {
    return {
      myswiper: ""
    }
  },
  mounted () {
    this.myswiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1000
    });
  },
  updated () {
    this.myswiper.update()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
.banner{
   width: 100%;
   img{
    width: 100%;
   }
   .swiper-slide img{
    display: block;
    width: 100%;
   }
  .swiper-pagination {
    .swiper-pagination-bullet{
      width: 10px;
      height: 2px;
    }
    .swiper-pagination-bullet-active{
      width: 16px;
    }
  }
}

</style>
