<template lang="html">
	<div class="homeDiv">
		<p><span v-for="item in pItems" @click="pItemFunc(item.index)">{{item.value}}</span></p>
		<div>
			<img src="../assets/1.png" :class="{none:(pItemFlag!=='0')}">
			<img src="../assets/2.png" :class="{none:(pItemFlag!=='1')}">
			<img src="../assets/3.png" :class="{none:(pItemFlag!=='2')}">
		</div>
		<p>列表展示</p>
		<div>
			<router-link :to="{path:'/detail',query:{itemMsg:listItem}}" class="aForli" v-for="listItem in listItems">
				· {{listItem.title}}  ￥{{listItem.price}} 
			</router-link>
		</div>
	</div>
</template>

<script>
	console.log("-------home script");
	export default {
	  // name: 'HelloWorld',
	  data () {
	    return {
	      pItems: [
	      	{index:"0",value:"导航1"},	{index:"1",value:"导航2"},	{index:"2",value:"导航3"}
	      ],
	      pItemFlag:"0"
	    }
	  },
	  methods:{
	  	pItemFunc(index){
	  		var that = this;
	  		that.pItemFlag = index;
	  	}
	  },
	  created(){
	  	// this.$http.get("goods.json").then((data)=>{this.listItems = data.body.data;});
	  	this.listItems =  [
	        { "price": "69.9", "title": "德芙", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t3688/270/776223567/128582/fa074fb3/58170f6dN6b9a12bf.jpg" },
	        { "price": "63", "title": "费列罗", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t613/100/1264998035/221234/1a29d51f/54c34525Nb4f6581c.jpg"},
	        { "price": "29.9", "title": "大米", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t1258/40/17387560/108696/aced445f/54e011deN3ae867ae.jpg"},
	        { "price": "54.9", "title": "安慕希", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2734/15/680373407/215934/3abaa748/572057daNc09b5da7.jpg"},
	        { "price": "58", "title": "金典", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2482/145/1424008556/91991/d62f5454/569f47a2N3f763060.jpg"},
	        { "price": "60", "title": "味可滋", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2368/3/874563950/70786/7b5e8edd/563074c8N4d535db4.jpg" },
	        { "price": "248.00", "title": "泸州老窖", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t283/166/1424018055/189580/7c0792b7/543b4958N05fa2feb.jpg"},
	        { "price": "328.8", "title": "剑南春", "img": "http://m.360buyimg.com/babel/s350x350_g15/M05/1A/0A/rBEhWlNeLAwIAAAAAAHyok3PZY0AAMl8gO8My0AAfK6307.jpg"},
	        { "price": "49.00", "title": "蓝莓", "img": "http://m.360buyimg.com/babel/s211x211_jfs/t2332/148/2952098628/94387/e64654e2/56f8d76aNb088c2ab.jpg" },
	        { "price": "68", "title": "芒果", "img": "http://m.360buyimg.com/n0/jfs/t3709/334/1378702984/206759/5c100ab5/58253588Naaa05c5c.jpg!q70.jpg"}
	    ]
	  }
	}
</script>

<style lang="css" scoped>
	*{
		padding:0;
		margin: 0;
	}
	.none{
		display: none;
	}
	.show{
		display: block;
	}
	.homeDiv{
		width: 100%;
		color:#333;
	}
	.homeDiv>p:nth-of-type(1){
		display: flex;
	    justify-content: space-around;
	    line-height: 3rem;
	    align-items: center;
	    border:solid gray;
	    border-width: 0 0 1pt 0;
	}
	.homeDiv>div:nth-of-type(1){
		width: 100%;
		height: 15rem;
	}
	.homeDiv>div>img{
		width: 100%;
		height: 100%;
	}
	.homeDiv>p:nth-of-type(2){
		padding:1rem;
		border:solid gray;
	    border-width: 0 0 1pt 0;
	}
	.homeDiv>div:nth-of-type(2){
		width: 100%;
	}
	.aForli{
		text-decoration: none;
		line-height: 2rem;
		padding-left: 1rem;
		display: block;
	}
	.aForli:hover{
		background-color: yellow;
	}
	.aForli:nth-child(even){
		background-color: #efefef;
	}
	.aForli:nth-child(odd){
		background-color: #dedede;
	}
</style>