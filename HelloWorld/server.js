'use strict'

const Hapi = require('@hapi/hapi')

async function start() {

    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            console.log('Received request from ' + request.info.remoteAddress + ':'
                + request.info.remotePort)
            return 'Hello World!'
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

start()
