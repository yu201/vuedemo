<template>
  <div class="cont">
    <div class="row" v-for="i in twdata.Records">
      <img :src="i.PictureWebp">
    </div>
    <div class="row" v-for="i in thrdata.Records">
      <img :src="i.PictureWebp">
    </div>
    <div class="fen">
      <h3 >
        {{trrname}}
      </h3>
      <div class="prodoct">
        <div class="left">
          <img :src="oneimg.PictureWebp" style="margin-bottom:14px">
          <img :src="twoimg.PictureWebp">
        </div>
        <div class="right">
          <img :src="thrimg.PictureWebp" alt="">
        </div>
      </div>
    </div>
    <div class="fen">
      <h3>
        {{frname}}
      </h3>
      <div class="prodoct1">
        <img v-for="i in frdata.Records" :src="i.PictureWebp" alt="">
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'imgs',
  data () {
    return {
      titleData: [],
      twdata: [],
      thrdata: [],
      trrdata: [],
      frdata: [],
      trrname: '',
      frname: '',
      oneimg: {},
      twoimg: {},
      thrimg: {}
    }
  },
  mounted () {
      this.getdata()
  },
  methods: {
    getdata () {
      this.$http.get('/api/navList')
        .then(function (response) {
         this.titleData=response.data.data;
         this.twdata=response.data.data[2];
         this.thrdata=response.data.data[3];
         this.trrdata=response.data.data[4];
         this.frdata=response.data.data[5];
         this.trrname=this.trrdata.Channel.Name;
         this.frname=this.frdata.Channel.Name;
         this.oneimg=response.data.data[4].Records[0];
         this.twoimg=response.data.data[4].Records[1];
         this.thrimg=response.data.data[4].Records[2];
         console.log(this.oneimg.PictureWebp)
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.cont{
   width: 100%;
   img{
    width: 100%;
   }
}
.row{
  width: 100%;
  img{
    width: 100%;
  }
}
.fen{
  width: 100%;
  h3{
    letter-spacing: 10px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 50%;
      padding-left: 6px;
      padding-right: 6px;
      box-sizing: border-box;
      dt{
        img{
          width: 100%;
        }
      }
      dd{
        padding: 0 .33rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.prodoct{
  display: flex;
  &>div{
    flex: 1;
    img{
      width: 100%;
    }
  }
}
.prodoct1{
  display: flex;
  flex-wrap: wrap;
  &>img{
    width: 50%;
    height: 50%;

  }
}
.pictab{
  width: 100%;
  overflow-x: hidden;
  p{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .box{
    overflow-x: auto;
    background: #fff;
  }
  .list{
    display: -webkit-box;
    overflow-x: auto;
    dl{
      width: 90px;
      display: block;
    }
    dt{
      img{
        width: 100%;
      }
    }
  }
}
</style>