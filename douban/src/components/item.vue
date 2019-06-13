<template>
	<div class="itemWrap" @click="fn">
		<span v-show="!bol">
			<slot name="normalImg"></slot>
		</span>
		<span v-show="bol">
			<slot name="activeImg"></slot>
		</span>
		<br />
		<span>{{txt}}</span>
	</div>
</template>

<script>
	export default{
		props:['txt','mark','selected'],
		computed:{
			bol(){
				if(this.mark==this.selected){
					return true;
				}
				return false;
			}
		},
		methods:{
			fn(){
				this.$emit("change",this.mark);
				//跳转
				this.$router.push('/'+this.mark);
			}
		}
	}
</script>

<style lang="less">
	.itemWrap{
		width: 20%;
		text-align: center;
	}
	.itemWrap img{
		width: 45/64rem;
	}
	.itemWrap span{
		font-size: 12px;
	}
</style>