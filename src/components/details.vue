<template>
  <banner :bannerData="detaid"></banner>

</template>
<script type="text/ecmascript-6">
  import banner from '@/view/home/component/banner'
  export default{
      data() {
        return{
            detaid: []
        }
      },
    components:{
      banner
    },
    created () {
      let ProductID = this.$route.params.ProductID;
      this.$http.jsonp( "http://m.haimi.com/api/product/detail-cdn?ProductID="+ProductID+"&platform=WAP",
        {
          jsonp: '_callback'
        }
      ).then(function(res){
        let data = res.data.data;
        this.name = data.Subject;
        this.detaid = JSON.parse( data.ProductPictures );
        console.log(this.detaid)
      },function(res){
        alert( res )
      })
    }
  }


</script>
<style scoped lang="less">

</style>
