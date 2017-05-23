<template>
	<!-- 横向产品 -->
	<div class="list">
        <dl v-for=" item in cross.Records">
          <dt><img :src="item.PictureWebp" alt=""></dt>
          <dd>
            <h6>{{item.SlideName}}</h6>
            <p>{{item.Description}}</p>
          </dd>
        </dl>
      </div>
</template>
<script>
export default {
  name: 'crossproduct',
  props: ['cross'],
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
    overflow-x: auto;
    background: #fff;
  }
h6{
  margin: 0;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
  .list{
    display: -webkit-box;
    overflow-x: auto;
    dl{
      width: 90px;
      display: block;
      background-color: #fff;

    }
    dt{
      img{
        width: 100%;
      }

    }
  }
</style>
