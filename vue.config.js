const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const analyzer = require('webpack-bundle-analyzer');
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
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
			if (process.env.report) {
				const BundleAnalyzerPlugin = analyzer.BundleAnalyzerPlugin;
				config.plugins.push(new BundleAnalyzerPlugin());
			}
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
