<template>
    <i-table-list
        :data="routes"
        :columns="columns"
        :show-pager="false"
        :row-key="(row) => row.name">
        <template v-slot:d-icon="{ scope }">
            <i :class="scope.row.icon"></i>
        </template>
        <template v-slot:d-is_menu="{ scope }">
            <el-tag v-if="scope.row.is_menu === 1" type="success" size="small">是</el-tag>
            <el-tag v-else type="info" size="small">否</el-tag>
        </template>
    </i-table-list>
</template>

<script>
	import routes from '@/router/routers';

	export default {
		name: 'Menu',
		data() {
			return {
				columns: [
					{
						label: '菜单名称',
						prop: 'title',
					},
					{
						label: '图标',
						prop: 'icon',
                        slotsName: {
							default: 'd-icon'
                        }
					},
					{
						label: '路由名（唯一性）',
						prop: 'name',
					},
					{
						width: '100',
						label: '是否菜单',
						prop: 'is_menu',
						slotsName: {
							default: 'd-is_menu'
						}
					},
                ],
				routes: routes
			};
		}
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>

</style>
