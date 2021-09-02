'use strict';

const mainPlugin = {
	name: 'main',
	version: '1.0.0',
    //pkg: require('./package.json'),
    register: require('./main')
};

module.exports = mainPlugin;