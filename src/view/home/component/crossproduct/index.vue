<template>
  <!-- 产品标题 -->
  <div class="pictab" >
      <img v-for="i in crosspro.Records" :src="i.PictureWebp" alt="">
  </div>
</template>
<script>
export default {
  name: 'crossproduct',
  props: ['crosspro'],
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.pictab{
  width: 100%;
  overflow-x: hidden;
  img{
    width: 100%;
  }
  
}
</style>