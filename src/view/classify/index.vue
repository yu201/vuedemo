<template>
    <div class="m-box">
      <div class="title">
        <router-link v-for="i in msg" :to="i.comm" active-class="on" >{{i.text}}</router-link>
      </div>
      <router-view></router-view>
      <footNav></footNav>
    </div>
</template>

<script>
  import footNav from '@/components/footer/'
    export default {
        data () {
            return {
                msg: [
                  {
                    text:"分类",
                    comm:"/classify/Class"
                  },
                  {
                    text:"品牌",
                    comm:"/classify/brand"
                  }
                ],
            }
        },
      components:{
        footNav
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .m-box{
    background: #fff;
    }
  .title{
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .title{
    a{
      display: inline-block;
      color: #000;
      width: 40px;
      position: relative;
      &.on:after{
        content:"";
        display:block;
        width:100%;
        height:3px;
        background:#000;
        position:absolute;
        bottom:6px;
      }
    }
    a:first-child{
      margin-right: 15px;
    }
    a:last-child{
      margin-left: 15px;
    }
  }

</style>
