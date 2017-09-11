<template>
	<div class="main">
		<mt-header title="热映">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-tabbar >
		  <mt-tab-item id="tab1">
		    <img slot="icon" src="../../assets/icons/member-coupon.png">
		    电影
		  </mt-tab-item>
		  <mt-tab-item id="tab2" src="../../assets/icons/member-integration.png">
		    <img slot="icon" >
		    影院
		  </mt-tab-item>
		  <mt-tab-item id="tab3" src="../../assets/icons/my.png">
		    <img slot="icon" >
		    我的
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'header',
		data(){

		}
	}
</script>
<style lang="css">
	
</style>