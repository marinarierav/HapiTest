'use strict';
const http = require('http')
const MyHttp = require('../myHttp')

const outQueue = 'TEST';
const inQueue = 'TEST';


function main() {
    console.log('✅ Loaded core business logic.')
    
    // Core functionality begins 
    const data = JSON.stringify({
        message: 'Hello queue!'
    })

    MyHttp.sendToQueue(data)
    //MyHttp.receiveFromQueue()

}


main.attributes = {
	name: 'main'
}

module.exports = main;