'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

	// Define Server Config
	const server = new Hapi.Server({
		port: process.argv[3] || 3000,
		host: 'localhost',
		routes: require('./core/routes')
	});

	server.start();
	console.log('Server running on %s', server.info.uri);

	// Core Logic
	server.register({
		plugin: require('./core'),
        options: {
            name: 'mainPlugin',
            arguments: process.argv
        }
	});
}

init()

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


