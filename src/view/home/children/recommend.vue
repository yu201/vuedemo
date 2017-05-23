<template>
  <div>
      <banner :bannerData="bannerData"></banner>
      <menuList :twoData="twoData"></menuList>
      <imgs></imgs>
      <!-- 标题 -->
      <crossproduct :crosspro="crosspro"></crossproduct>
      <cross :cross="cross"></cross>
      <!-- 标题 -->
      <crossproduct :crosspro="crosspro1"></crossproduct>
      <cross :cross="cross1"></cross>
      <!-- 标题 -->
      <crossproduct :crosspro="crosspro2"></crossproduct>
      <cross :cross="cross2"></cross>
      <endlong v-for="item in endlongData" :endlong="item"></endlong>
  </div>
</template>
<script>
  import banner from '@/view/home/component/banner/index.vue'
  import menuList from '@/view/home/component/list/index.vue'
  import imgs from '@/view/home/component/imgs/index.vue'
  import crossproduct from '@/view/home/component/crossproduct/index.vue'
  import cross from '@/view/home/component/cross/index.vue'
  import endlong from '@/view/home/component/endlong/index.vue'
  export default {
    data () {
      return {
        twoData: [],
        bannerData: [],
        crosspro: [],
        cross: [],
        crosspro1: [],
        cross1: [],
        crosspro2: [],
        cross2: [],
        endlongData: []
      }
    },
    components: {
      banner,
      menuList,
      imgs,
      crossproduct,
      cross,
      endlong
    },
    created () {
      this.getdata()
    },
    methods: {
      getdata () {
        this.$http.get('/api/navList')
          .then(function (response) {
           var data=response.data.data;
           this.twoData=data[1].Records
           this.bannerData=data[0].Records
           this.crosspro=data[6]
           this.cross=data[7]
           this.crosspro1=data[8]
           this.cross1=data[9]
           this.crosspro2=data[10]
           this.cross2=data[11]
          }),
        this.$http.get('/api/indexData')
          .then(function (response) {
            this.endlongData=response.data.data
          })
      }
    },
    watch: {
      '$route': 'getdata'
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .conten{
    overflow-y: auto;
  }
  div{
    width: 100%;
  }
</style>
