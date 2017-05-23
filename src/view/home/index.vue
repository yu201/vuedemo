<template>
  <div>
    <div class="conten">
      <headerBar></headerBar>
      <headNav></headNav>
      <router-view></router-view>
    </div>
    <footNav></footNav>

  </div>
</template>
<script>
  import footNav from '@/components/footer/'
  import headerBar from '@/components/header'
  import headNav from '@/view/home/component/headNav/index.vue'
  export default {
    name: 'home',
    components: {
      headerBar,
      footNav,
      headNav
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
