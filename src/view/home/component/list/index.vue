<template>
  <div class="menuList">
    <dl v-for='item in twoData'>
      <dt><img :src="item.PictureWebp" alt=""></dt>
      <dd>{{item.SlideName}}</dd>
    </dl>
  </div>
</template>

<script>

export default {
  name: 'menuList',
  props: ["twoData"],
  data () {
    return {}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menuList{
  width: 100%;
  background: #fff;
  margin-top: 6px;
  display: -webkit-flex;
  dl{
    flex:1;
    text-align: center;
    box-sizing: border-box;
    img{
      width: 80px;
    }
    dd {
      margin-top: 3px;
      background: #fff;
    }
  }
}

</style>
