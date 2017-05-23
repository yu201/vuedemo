<template>
  <nav class="nav">
    <router-link v-for="item in msg" :to="item.link" activeClass="on">
      <span :class="item.icon"></span>
      <span>{{item.text}}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'footNav',
  data () {
    return {
      msg: [
        {
          text: '首页',
          link: '/home',
          icon: 'iconfont icon-home'
        },
        {
          text: '分类',
          link: '/classify',
          icon: 'iconfont icon-classify'
        },
        {
          text: '购物车',
          link: '/shopping',
          icon: 'iconfont icon-shopping'
        },
        {
          text: '我的',
          link: '/user',
          icon: 'iconfont icon-user'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../static/icon/iconfont.css';
  .nav{
    height: 44px;
    display: flex;
    padding-top: 4px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
  }
  .nav a{
    flex: 1;
    text-align: center;
    color: #666;
    display: flex;
    flex-direction: column;
    span:first-child{
      padding-bottom: 4px;
    }
    &.on{
      color: red;
     }
  }

</style>
