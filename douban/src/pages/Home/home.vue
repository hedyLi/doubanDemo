<template>
	<div>
		<button @click="temp()">测试</button>
		<Header hasbg='true'>
			<img slot="rightImg" class="rightImg" src="../../assets/images/ic_chat_green.png" alt="" />
			<div slot="search" class="search">
				<input type="text" placeholder="影视 图书 唱片 小组等"  />
				<img class="searchImg" src="../../assets/images/ic_group_search_small.png" alt="" />
				<img class="scanImg" src="../../assets/images/ic_scan_gray.png" alt="" />
			</div>
		</Header>  
		<Banner swiperid="homeswiper122" paginationtype="bullets">
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/images/banner/01.jpg" alt="" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/images/banner/02.jpg" alt="" />
			</div>
			<div slot="swiper-con" class="swiper-slide">
				<img src="../../assets/images/banner/03.jpg" alt="" />
			</div>
		</Banner>
		<Newslist v-for="(item,index) in arr" :url="item.target.cover_url" :key="index">
			<div slot="listLeft">
				<h4>{{item.title}}</h4>
	 	 		<p>{{item.target.desc}}</p>
	 	 		<p class="author">作者：{{item.target.author.name}}</p>
			</div>
		</Newslist>
		
	</div>
</template>

<script>
	import Header from '../../components/header'
	import Banner from '../../components/banner' 
	import Newslist from '../../components/newslist'
	export default{
		data(){
			return {
				arr:[]
			}
		},
		components:{
			Header,Banner,Newslist
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/data/homeData.json')
				.then(res =>{
					console.log('success',res.data.recommend_feeds);
					this.arr=res.data.recommend_feeds;
				}).catch(err=>{
					console.log('err',err);
				})
			},
			temp(){
				this.$axios.get('https://www.easy-mock.com/mock/5cfe1838fa5d3107fe073123/example_copy_copy_copy/mymock')
				.then(res =>{
					console.log('success',res); 
				}).catch(err=>{
					console.log('err',err);
				})
			}
		}
	}
</script>

<style>
</style>