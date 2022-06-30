const { resolve } = require('path')
const { getWebpackConfig } = require('nuxt')
const { loadNuxt } = require('@nuxt/core')
const { defineConfig } = require('vue-styleguidist') 

const FILTERED_PLUGINS = [
	'WebpackBarPlugin',
	'VueSSRClientPlugin',
	'HotModuleReplacementPlugin',
	'FriendlyErrorsWebpackPlugin',
	'HtmlWebpackPlugin'
]

/**
 * @param {string} name
 * @param {any} options
 */
async function patchedGetWebpackConfig(name, options) {
  const nuxt = await loadNuxt(options)
  const config = await getWebpackConfig(name, options)
  await nuxt.callHook('webpack:config', [config])
  return config
}

async function getConfig () {
	// get the webpack config directly from nuxt
	const nuxtWebpackConfig = await patchedGetWebpackConfig('client', {
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
				// And some other plugins that could conflict with styleguidists
				p => FILTERED_PLUGINS.indexOf(p.constructor.name) === -1
			)
		]
	}

	return defineConfig({
		components: './components/**/[A-Z]*.vue',
    renderRootJsx: resolve(__dirname, 'styleguide/styleguide.root.js'),
		webpackConfig,
		usageMode: 'expand',
		styleguideDir: 'dist',
    defaultExample: true,
    styleguideComponents: {
      LogoRenderer: resolve(__dirname, 'styleguide/components/Logo'),
    }
	})
}

module.exports = getConfig