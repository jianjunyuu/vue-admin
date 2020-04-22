<template>
    <el-container>
        <el-header class="header">
            <div class="logo">
                <h1 class="title">Vue Admin</h1>
                <h4 class="sub-title">基于Element UI的中台解决方案</h4>
            </div>
            <div class=""></div>
        </el-header>
        <el-container class="full-height">
            <el-aside class="aside">
                <i-menu
                    :data="menus"
                    :default-active="'2-2'"
                    :unique-opened="true">
                </i-menu>
            </el-aside>
            <el-main class="main">
                <i-table-list :data="tableListsData" :columns="columns"></i-table-list>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
	export default {
		name: 'Layout',
		data() {
			return {
				tableListsData: [
					{
						a: 'A',
						b: 'B',
					},
					{
						a: 'A',
						b: 'B',
					},
					{
						a: 'A',
						b: 'B',
					}
				],
				columns: [
					{
						label: 'MMM',
						prop: 'a',
						slotsName: {}
					},
					{
						label: 'nnn',
						prop: 'b',
					},
				],
				menus: [
					{
						title: '首页',
						index: '1',
						children: []
					},
					{
						title: '组件库',
						index: '2',
						children: [
							{
								title: 'Menu',
								index: '2-1',
								children: []
							},
							{
								title: 'TableList',
								index: '2-2',
								children: []
							},
						]
					},
					{
						title: '组件库',
						index: '3',
						children: [
							{
								title: 'Menu',
								index: '3-1',
								children: []
							},
							{
								title: 'TableList',
								index: '3-2',
								children: []
							},
							{
								title: 'Menu',
								index: '3-3',
								children: []
							},
							{
								title: 'TableList',
								index: '3-4',
								children: []
							},
							{
								title: 'TableList',
								index: '3-5',
								children: []
							},
							{
								title: 'TableList',
								index: '3-6',
								children: []
							},
							{
								title: 'TableList',
								index: '3-7',
								children: []
							},
						]
					}
				]
			};
		},
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .header {
        display: flex;

        /*padding: 0;*/
        height: $header-height !important;
        // line-height: $header-height;
        border-bottom: solid 1px #e6e6e6;
        .logo {
            display: flex;
            flex-direction:column;
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

    .aside {
    }

    .main {
    }
</style>
