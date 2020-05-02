<template>
    <el-breadcrumb separator="/" class="Breadcrumb">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="path in paths" :key="path.name" :to="{name: path.name}">
                {{path.title}}
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
	export default {
		name: 'Breadcrumb',
		computed: {
			paths() {
				let menu = this.$route.meta['node'];
				let paths = [];
				while (menu) {
					paths.unshift({
						title: menu.title,
						name: menu.name
					});
					menu = menu.parent;
				}
				return paths;
			}
		},
	};
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
.Breadcrumb {
    margin-bottom: 20px;

    /*breadcrumb transition*/
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all .3s;
    }

    .breadcrumb-enter,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }

    .breadcrumb-move {
        transition: all .3s;
    }

    .breadcrumb-leave-active {
        position: absolute;
    }
}
</style>
