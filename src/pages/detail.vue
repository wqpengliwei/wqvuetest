<template lang="html">
	<div class="detailDiv">
		<div>
			<img :src="detailItem.img">
		</div>
		<p>列表个数详情</p>
		<div>
			<p>名称：{{detailItem.title}}</p>
			<p>价格（￥）：{{detailItem.price}}</p>
		</div>
	</div>
</template>

<script>
	console.log("------detail");
	export default{
		data(){
			return {
				detailItem:{} 
			}
		},
		created(){
			//接收参数
			console.log("------");
			console.log(this.$route.query.itemMsg);
			this.detailItem = this.$route.query.itemMsg;
		}
	}
</script>

<style lang="css" acoped>
	.detailDiv>div:nth-of-type(1){
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.detailDiv>div>img{
		width: 80%;
	}
	.detailDiv>p{
		padding: 1rem;
	}
	.detailDiv>div>p{
		padding-left: 2rem;
		color: #999;
	}

</style>