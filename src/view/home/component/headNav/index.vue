<template>
  <div class="nav">
    <div class='nav-list'>
      <router-link v-for='item in menuList' :to="item.Link+'/'+item.NavID" class='swiper-slide li' active-class="on" >{{item.Title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headNav',
  data () {
    return {
      menuList: []
    }
  },
  created (){
    this.getmenuList()
  },
  methods: {
    getmenuList () {
        this.$http.get('/api/menuList')
          .then(function (response) {
            this.menuList=response.data.data
          })
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav{
   background: #fff;
   font-size: 14px;
   width:100%;
   height:34px;
   border-bottom: 1px solid #e5e5e5;
}
.nav-list{
  overflow-x: auto;
  display: -webkit-box;
  width: 100%;
}
.li{
 display: block;
 font-size: 12px;
 width: 40px;
 height: 32px;
 line-height: 32px;
 text-align: center;
 color: #000;
 position: relative;
 &.on:after{
    content:"";
    display:block;
    width:80%;
    height:3px;
    background:#000;
    position:absolute;
    bottom:0;
    left:10%;

 }
}
</style>