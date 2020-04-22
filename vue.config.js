const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-admin' : '/',
	devServer: {
		host: '0.0.0.0'
	},
	css: {
		extract: IS_PROD,
		sourceMap: false,
		loaderOptions: {
			scss: {
				// 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
				// 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
				prependData: `
					@import "@/scss/color.scss";
					@import "@/scss/variables.scss";
				`
			}
		}
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.plugins.push(new CompressionPlugin({
				test: /\.js$|\.html$|.\css/, //匹配文件名
				threshold: 10240,//对超过10k的数据压缩
				deleteOriginalAssets: false //不删除源文件
			}));
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
		}
	},
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Vue Admin';
				return args;
			});
	}
};
