<template lang="html">
	<div class="componentVueDiv">
		<p>showFlag:{{showFlag}}</p>
		<hello-world :class="{none:(showFlag !== 'HelloWorld')}"></hello-world>
		<weui :class="{none:(showFlag !== 'Weui')}"></weui>
	</div>
</template>

<script>
	console.log("------componentVue");
	import HelloWorld from '../components/helloWorld'
	import Weui from '../components/Weui'
	export default{
		data(){
			return {
				showFlag:""
			}
		},
		created(){
			//接收参数
			console.log(this.$route.query.homeToComponentVue);
			this.showFlag = this.$route.query.homeToComponentVue;
		},
		components:{
			HelloWorld,
			Weui
		}
	}
</script>

<style lang="css" acoped>
	.none{
		display: none;
	}

</style>