'use strict';
const http = require('http')

const outQueue = 'TEST';
const inQueue = 'TEST';

class myHttp {

    static sendToQueue(data) {
        const options = {
            hostname: 'localhost',
            port: 8161,
            path: '/api/message/'+outQueue+'?type=queue',
            method: 'POST',
            auth: 'admin:admin',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
            }
        }

        console.log(data)
        
        const req = http.request(options, res => {
            console.log(`Sent message with statusCode: ${res.statusCode}\n`)

            res.on('data', d => {
                process.stdout.write(d + '\n')
            })
        })
        
        req.on('error', error => {
            console.log('We found an error while making http POST request...\n')
            console.error(error)
        })
        
        req.write(data)
        req.end()
    }


    static receiveFromQueue() {        

        const options = {
            hostname: 'localhost',
            port: 8161,
            //path: '/api/message?destination=queue://' + inQueue + '&oneShot=true',
            path: '/api/message?destination=queue://' + inQueue + '&clientId=consumerA',
            method: 'GET',
            auth: 'admin:admin',
            headers: {
                'Content-Type': 'application/json',
            }
        }        

        const req = http.request(options, res => {
            console.log(`Received message with statusCode: ${res.statusCode}\n`)
        
            res.on('data', d => {
                process.stdout.write(d + '\n')
            })
        })
        
        req.on('error', error => {
            console.log('We found an error while making http GET request...\n')
            console.error(error)
        })
        
        req.end() 
    }
}

myHttp.attributes = {
	name: 'myHttp'
}

module.exports = myHttp;