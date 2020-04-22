<template>
    <el-container direction="vertical">
        <layout-header></layout-header>
        <el-container class="full-height">
            <layout-aside></layout-aside>
            <layout-main></layout-main>
        </el-container>
    </el-container>
</template>

<script>
	import LayoutHeader from './LayoutHeader';
	import LayoutAside from './LayoutAside';
	import LayoutMain from './LayoutMain';

	export default {
		name: 'Layout',
		components: {LayoutHeader, LayoutAside, LayoutMain},
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>

</style>
