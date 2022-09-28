
const { initPlugin } = require('cypress-plugin-snapshots/plugin')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
	on('file:preprocessor', cucumber())
	initPlugin(on, config)
	return config
}
