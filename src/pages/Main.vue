<!--
**************************************
*	名称：主页面1
*	作用：主页面框架嵌入：针对仅有上导航
*	作者：洋葱
**************************************
-->
<template>
	<div>
		<head-top></head-top>
		<el-row style="margin-top: 71PX">			
			  <el-col :span="24">
			  	<router-view></router-view>
			  </el-col>		
		</el-row>
	</div>
</template>

<script>
	// import headTop from '../components/headTop';
	import router from '../router';
	export default {
		name: 'main',
		components: {
			headTop,
		},
		mounted() {
			// 跳转后返回顶部
			router.afterEach((to,from,next) => {
			  window.scrollTo(0,0);
			})
		}
	}
</script>
<style scoped>



</style>