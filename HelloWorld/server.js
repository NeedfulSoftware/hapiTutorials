var Hapi = require('hapi')

var server = new Hapi.Server()

server.connection({ port: 8080 })

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log('Received request from ' + 
            request.info.remoteAddress + ':' + 
            request.info.remotePort)
        return reply('Hello World!')  
    }
})

server.start(function (err) {
    console.log(server.info.uri)
})
