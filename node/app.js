'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

	// Define Server Config
	const server = new Hapi.Server({
		port: process.env.port || 3000,
		host: 'localhost',
		routes: require('./core/routes')
	});

	server.start();
	console.log('Server running on %s', server.info.uri);

	// Core Logic
	server.register({
		plugin: require('./core'),
        options: {
            name: 'mainPlugin'
        }
	});
}

init()

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


