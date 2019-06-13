<template>
	 <div class="banner">
	 	<!--由于整个项目可能存在多个轮播图，一般会传入一个轮播图唯一id-->
	 	<div class="swiper-container" :class="swiperid">
		    <div class="swiper-wrapper"> 
		        <slot name="swiper-con"></slot>
		    </div>
		    <!-- 如果需要分页器   注意引号-->
		    <div :class="{'swiper-pagination':paginationshow}"></div>  
		</div>
	 </div> 
</template> 
<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css'
	export default {
		//props高级写法
		props:{
			swiperid:{ type:String ,default:'' },  //唯一标识
			paginationshow:{ type:Boolean,default:true},  //是否显示分页器
			paginationtype:{ type:String,default:"bullets"} //分页器的样式
			//切换效果
			//是否自动播放
			//循环模式
		},
		mounted:function(){
			console.log(this.paginationtype)
			new Swiper ('.'+this.swiperid, { 
				    loop: true, // 循环模式选项
				    autoplay:true, //自动播放
				    // 如果需要分页器
				    pagination: {
				      el: '.swiper-pagination',
				      type: this.paginationtype  //分页器样式， bullets fraction
				    },
				    effect:'swiper'//切换效果  swiper , cube 
				  })   
			}
	}
</script> 
<style lang="less">
  .banner{
  	width: 100%;
  	overflow: hidden;
  	height: 140/64rem;
  	position: relative;
  } 
  .banner .swiper-slide img{
  	width: 100%;
  }
</style>