<template>
  <div class="fen">
    <h3 v-if="endlong.Title!=''">
      {{endlong.Title}}
    </h3>
    <div class="content">
      <dl v-for="i in endlong.Products">
        <router-link :to="{name:'detail',params:{ProductID:i.ProductID}}">
        <dt>
          <img :src="i.PicturesWebp" alt="">
        </dt>
        <dd>
          <p>{{i.Subject}},{{i.SecondSubject}}</p>
          <p>¥{{i.FinalPrice}}</p>
        </dd>
        </router-link>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: 'endlong',
  props: ['endlong'],
  data () {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
        p{
          padding-top: 4px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

        }
      }
    }
  }
}

</style>
