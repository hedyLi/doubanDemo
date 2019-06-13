<template>
	<div :class="{headerWrap:true,gbgreen:hasbg}">
		<span>{{txt}}</span>
		<slot name="leftImg"></slot>
		<slot name="rightImg"></slot> 
		<slot name="search"></slot>
	</div>
</template>

<script>
//	import Item from './item';
	export default {
		props:['txt','hasbg']
	}
</script>

<style lang="less">
 .headerWrap{
 	width: 100%;
 	height: 50/64rem;
 	line-height: 50/64rem;
 	border-bottom: 1px solid #ccc;
 	text-align: center;
 	background: #f8f8f8;
 	position: relative;
 	
 }
  .headerWrap img{
  	width: 25/64rem;
  	position: absolute;
  }
  .headerWrap .leftImg{
  	top: 15/64rem;
  	right: 50/64rem;
  }
  .headerWrap .rightImg{
  	top: 15/64rem;
  	right: 10/64rem;
  }
  /*搜索区域样式*/
 .headerWrap input{
 	width: 85%;
 	position: absolute;
 	left: 8/64rem;
 	top: 10/64rem;
 	border: none;
 	border-radius: 5px;
 	height: 30/64rem;
 	text-indent: 3em;
 }
 
  .headerWrap .search img{
  	position: absolute;
  	width: 20/64rem;
  }
  .headerWrap .search .searchImg{
  	left: 13/64rem;
  	top: 15/64rem;
  }
  .headerWrap .search .scanImg{
  	right: 58/64rem;
  	top: 15/64rem;
  }
  .gbgreen{
  	background: green;
  }
</style>