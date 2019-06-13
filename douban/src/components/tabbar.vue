<template>
	<div class="tabbar">
		<item txt="首页" mark="home" :selected="selected" @change="getVal" >
			<img src="../assets/images/ic_tab_home_normal.png" slot="normalImg" alt="" />
			<img src="../assets/images/ic_tab_home_active.png" slot="activeImg" alt="" />
		</item>
		<item txt="书影音" mark="audio" :selected="selected" @change="getVal" >
			<img src="../assets/images/ic_tab_subject_normal.png"  slot="normalImg" alt="" />
			<img src="../assets/images/ic_tab_subject_active.png" slot="activeImg" alt="" />
		</item>
		<item txt="广播" mark="broadcast" :selected="selected" @change="getVal" >
			<img src="../assets/images/ic_tab_status_normal.png"  slot="normalImg" alt="" />
			<img src="../assets/images/ic_tab_status_active.png" slot="activeImg" alt="" />
		</item>
		<item txt="分组" mark="group" :selected="selected" @change="getVal" >
			<img src="../assets/images/ic_tab_group_normal.png"  slot="normalImg" alt="" />
			<img src="../assets/images/ic_tab_group_active.png" slot="activeImg" alt="" />
		</item>
		<item txt="我的" mark="mine" :selected="selected" @change="getVal" >
			<img src="../assets/images/ic_tab_profile_female_normal.png"  slot="normalImg" alt="" />
			<img src="../assets/images/ic_tab_profile_active.png" slot="activeImg" alt="" />
		</item>
	</div>
</template>

<script>
	import Item from './item';
	export default {
		data:function(){
			return {
				selected:"home"
			}
		}, 
		components: {
			Item
		},
		methods:{
			getVal(val){
				this.selected = val;
			}
		}
	}
</script>

<style lang="less">
	.tabbar {
		max-width: 640px;
		width: 100%;
		position: fixed;
		bottom: 0;
		background: pink;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 68/64rem;
	}
</style>