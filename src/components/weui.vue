<template lang="html">
	<div class="weuiDiv">
		<a href="javascript:;" class="weui-btn weui-btn_primary">绿色按钮</a>
		<div v-html="html"></div>
	</div>
</template>

<script>
	console.log("------weui");
	export default{
		data(){
			return {
				html:"<p>sss</p>"
			}
		},
		 mounted () {
	      this.load("https://github.com/Tencent/weui/wiki/Button")
	    },
	    methods: {
	      load (url) {
	        if (url && url.length > 0) {
	        	let param = {
			      accept: 'text/html, text/plain'
			     }
	           this.$http.get(url)
	          	.then((response) => {
	            // 处理HTML显示
	            this.html = response.data
	          }).catch(() => {
	            this.html = '加载失败'
	          })
	        }
	        console.log("load html = "+ this.html);
	      }
	    }
	}
</script>

<style lang="css" acoped>
	@import '../assets/css/weui.css';
	.none{
		display: none;
	}

</style>