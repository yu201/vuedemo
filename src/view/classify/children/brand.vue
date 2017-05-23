<template>
  <div class="box">
    <dl v-for="item in branData.Records">
      <dt>
        <img :src="item.PictureWebp" alt="">
      </dt>
      <dd>
        <span>{{item.SlideName}}</span>
        <p>{{item.Description}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                branData: ''
            }
        },
        created () {
            this.getData()
        },
        methods:{
            getData () {
                this.$http.get('/api/brand').then(function (data) {
                  this.branData=data.data.data[0];
                  console.log(this.branData)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
  .box{
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 106px;
      img{
        width: 100px;
      }
      dd{
        p{
          padding: 8px;
          text-align: center;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
