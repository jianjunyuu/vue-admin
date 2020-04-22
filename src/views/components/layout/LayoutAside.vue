<template>
    <el-aside class="aside">
        <i-menu
            :data="menus"
            :default-active="defaultActive"
            router
            :unique-opened="true">
        </i-menu>
    </el-aside>
</template>

<script>
	export default {
		name: 'LayoutAside',
		computed: {
			menus() {
				return this.$store.getters.menus;
			},
			// 获取到当前路由到名称，如果当前路由不是菜单路由，则往上找父级
			defaultActive() {
				let {name, meta: {node = {}}} = this.$route;
				const getMenuName = function (node, name) {
					return node
						? node.is_menu === 1
							? node.name : getMenuName(node.parent, node.name)
						: name;
				};
				return getMenuName(node, name);
			}
		}
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>

</style>
