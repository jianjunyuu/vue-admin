<template>
    <!--
     v-loading.fullscreen.lock="$route.path === '/'"
    -->
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss">
    #app, .container, .el-container, .el-aside, body, html {
        height: 100%;
        color: $normal-text-color;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .full-height {
        height: 100%;
        overflow: auto;
    }
</style>
