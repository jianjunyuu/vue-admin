<template>
    <el-header class="header">
        <div class="logo">
            <h1 class="title">Vue Admin</h1>
            <h4 class="sub-title">基于Element UI的中台解决方案</h4>
        </div>
        <div class=""></div>
    </el-header>
</template>

<script>
	export default {
		name: 'LayoutHeader'
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .header {
        display: flex;

        height: $header-height !important;
        // line-height: $header-height;
        border-bottom: solid 1px #e6e6e6;

        .logo {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .title {
                font-size: 22px;
                color: $main-color;
            }

            .sub-title {
                font-size: 14px;
                color: $placeholder-text-color;
                font-weight: normal;
            }
        }
    }
</style>
