'use strict';

const main = require('./main')

const mainPlugin = {
	name: 'main',
	version: '1.0.0',
    //pkg: require('./package.json'),
    register: async function(server, options) {
		main(options)
	}
};

module.exports = mainPlugin;