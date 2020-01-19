/*
    Copyright (c) 2020 Xavier Leclercq
    Released under the MIT License
    See https://github.com/NeedfulSoftware/hapiTutorials/blob/master/LICENSE.txt
*/

'use strict'

const Hapi = require('@hapi/hapi')

async function start() {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            console.log('Received request from ' + request.info.remoteAddress + ':'
                + request.info.remotePort)
            return new Promise((resolve, reject) => {
                resolve('Hello World from async handler!');
            });
        }
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

start()
