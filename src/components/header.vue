<template>
	<header class="header">
		<div class="seac">
			<i class="iconfont icon-search"></i>
			<input type="text" placeholder="搜索宝贝">
		</div>
		<button>搜索</button>
	</header>
</template>
<script>
	
</script>

<style scoped lang= "less">
  .header{
    width: 100%;
  	height: 44px;
  	line-height: 44px;
  	background: #242424;
  	display: flex;
  	padding: 5px;
    box-sizing: border-box;
    align-items: center;
  	.seac{
  		flex: 1;
      position: relative;
      height: 30px;
  		input{
        width: 100%;
        height: 100%;
        background: #000;
  			border: none;
  			color: #fff;
  			padding-left: 40px;
  			padding-right: 10px;
  			box-sizing: border-box;
        position: absolute;
        left: 0;
  		}
  	}
  	i{
  		color: #999;
      position: absolute;
      z-index: 1;
      left: 10px;
      top: -6px;

  	}
  	button{
  		color: #fff;
      border: none;
      background: transparent;
      padding-left: 10px;
  	}
  }
</style>