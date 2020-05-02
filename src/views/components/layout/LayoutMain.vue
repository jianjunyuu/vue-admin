<template>
    <el-main class="main">
        <breadcrumb></breadcrumb>
        <button @click="$router.push({name: 'IMenu'})">IMenu</button>
        <br />
        <button @click="$router.back()">back</button>
        <br />
        <button @click="$router.replace({name: 'IMenu'})">replace</button>
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
