<template>
  <div class="m-box">
    <div class="banner"  v-for="items in classData ">
      <img  v-if="items.Records[0].PictureWebp != ''" :src="items.Records[0].PictureWebp" alt="">
      <a  v-else v-for="item in items.Records" href="#">{{item.SlideName}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        classData:''
      }
    },
    created (){
      this.getData()
    },
    methods:{
      getData:function () {
        this.$http.get("/api/classData").then(function (res) {
          this.classData=res.data.data
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .banner{
    padding: 6px 0 6px;
    a{
      float: left;
      height: 30px;
      line-height: 30px;
      padding: 1px 6px;
      border: 1px solid #e5e5e5;
      margin: 0 0 5px 5px;
      color: #000;
    }
  }

</style>
