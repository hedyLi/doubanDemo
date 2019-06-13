<template>
	 <div class="listWrap">
	 	 <div class="left">
	 	 	<slot name="listLeft"></slot>
	 	 </div>
	 	 <div class="right"> 
	 	 	<img :src="url" alt="" />
	 	 </div>
	 </div> 
</template> 
<script> 
	export default {
		props:['url']  
	}
</script> 
<style lang="less">
 .listWrap{
 	text-align: left;
	height: 150/64rem;
	border-bottom: 1px solid #ccc;
	overflow: hidden;
	padding:20/64rem;
	.left{
		float: left;
		width: 65%;
	}
	.right{
		width: 32%;
		float: right;
	}
	img{
		width: 100/64rem;
		height: 100/64rem;
	}
	p{
		margin: 10px 0;
		color: #999;
		font-size: 14px;
	}
	.author{
		color:#ccc;
		font-size: 12px;
	}
 }
</style>