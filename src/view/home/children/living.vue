<template>

	<div>
    <div class="pic" v-if="navData.img">
      <img  :src="navData.img" alt="">
    </div>
    <endlong :endlong="navData2"></endlong>
	</div>

</template>

<script>
  import endlong from '../component/endlong'
  export default{
      data () {
        return{
            navData:'',
            navData2:''
        }
      },
      components:{
        endlong
      },
      created () {
        this.getdata()
      },
      methods:{
          getdata() {
            var index=this.$route.params.id;
            this.$http.get("/api/listData").then(function (data) {
              this.navData=data.data[index]
            },function (error) {
              alert(error)
            });
            this.$http.get("/api/listData2").then(function (res) {
              this.navData2=res.data[index].data[0]
              console.log(this.navData2)
            },function (error) {
              alert(error)
            })
          }

      },
      watch: {
        '$route': 'getdata'
      }
  }
</script>
<style scoped lang="less">
  .pic{
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>
