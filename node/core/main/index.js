'use strict';
const http = require('http')
const MyHttp = require('../myHttp')

const outQueue = 'TEST';
const inQueue = 'TEST';


function main(options) {
    console.log('✅ Loaded core business logic.')
    const mode = options.arguments[2]

    if (mode === undefined) {
        console.log('Please specify if you want to GET/POST a message to the queue...')
        return
    }

    // Core functionality begins 
    if (mode.toUpperCase() == 'POST') {
        const data = JSON.stringify({
            message: 'Hello queue!'
        })
        MyHttp.sendToQueue(data)
    } else if (mode.toUpperCase() == 'GET') {
        MyHttp.receiveFromQueue()
    }
    return
}


main.attributes = {
	name: 'main'
}

module.exports = main;