<template>
	<div>
		<Header txt="书影音">
			<img slot="leftImg" class="leftImg" src="../../assets/images/ic_actionbar_search_icon.png" alt="" />
			<img slot="rightImg" class="rightImg" src="../../assets/images/ic_chat_green.png" alt="" />
		</Header>
		<nav class="nav">
			<span :class="{active:currIndex==0}" @click="currIndex=0">
				<router-link to='/audio/film'>书影音</router-link>
			</span> 
			<span :class="{active:currIndex==1}"  @click="currIndex=1">
				<router-link to='/audio/read'>读书</router-link>
			</span>
			<span :class="{active:currIndex==2}"  @click="currIndex=2">
				<router-link to='/audio/tv'>电视</router-link>
			</span>
			<span :class="{active:currIndex==3}"  @click="currIndex=3">
				<router-link to='/audio/city'>同城</router-link>
			</span>
			<span :class="{active:currIndex==4}"  @click="currIndex=4"> 
				<router-link to='/audio/music'>音乐</router-link>
			</span> 
			<div class="navcontent">
				<!--占位符-->
				<router-view></router-view>
			</div>
		</nav>
	</div>
</template>

<script>
	import Header from '../../components/header'
	export default{
		data(){
			return {
				currIndex:0
			}
		},
		components:{
			Header
		},
		beforeCreate:function(){ 
			this.$router.push('/audio/film');
		}
	}
</script>

<style lang="less">
.nav{
	height: 35/64rem;
	line-height: 35/64rem;
	border-bottom: 1px solid #ccc;
	a{ 
		text-decoration: none;
		font-size: 14px;
		color: #999;
	}
	span{
		display: inline-block;
		height: 35/64rem; 
		width: 20%;
		float: left;
	}
	span.active{
		background: green; 
		a{
			color: #fff;
		}
	}
}
</style>