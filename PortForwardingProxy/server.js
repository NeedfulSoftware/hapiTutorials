var Hapi = require('hapi')

var server = new Hapi.Server()

server.connection({ port: 8081 })

server.register(require('h2o2'), function (err) {
    if (err) {
        throw err
    }
})

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: '8080',
            protocol: 'http'
        }
    }
});

server.start(function (err) {
    console.log(server.info.uri)
})
