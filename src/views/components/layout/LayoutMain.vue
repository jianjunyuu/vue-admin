<template>
    <el-main class="main">
        <breadcrumb></breadcrumb>
        <router-view></router-view>
    </el-main>
</template>

<script>
	import Breadcrumb from './Breadcrumb';

	export default {
		name: 'LayoutMain',
		components: {Breadcrumb}
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>

</style>
