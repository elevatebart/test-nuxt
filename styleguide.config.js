const { resolve } = require('path')
const { getWebpackConfig } = require('nuxt')

const FILTERED_PLUGINS = [
	'WebpackBarPlugin',
	'VueSSRClientPlugin',
	'HotModuleReplacementPlugin',
	'FriendlyErrorsWebpackPlugin',
	'HtmlWebpackPlugin'
]

/**
 * @return Promise<import("vue-styleguidist").Config>
 */
async function getConfig () {
	// get the webpack config directly from nuxt
	const nuxtWebpackConfig = await getWebpackConfig('client', {
		for: 'dev'
	})

	const webpackConfig = {
		module: {
			rules: [
				...nuxtWebpackConfig.module.rules.filter(
					// remove the eslint-loader
					a => a.loader !== 'eslint-loader'
				)
			]
		},
		resolve: { ...nuxtWebpackConfig.resolve },
		plugins: [
			...nuxtWebpackConfig.plugins.filter(
				// And some other plugins that could conflcit with ours
				p => FILTERED_PLUGINS.indexOf(p.constructor.name) === -1
			)
		]
	}

	return {
		components: './components/**/[A-Z]*.vue',
    renderRootJsx: resolve(__dirname, 'styleguide/styleguide.root.js'),
		webpackConfig,
		usageMode: 'expand',
		styleguideDir: 'dist',
    defaultExample: true,
	}
}

module.exports = getConfig