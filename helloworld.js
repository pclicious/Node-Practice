var http = require('http');

http.createServer(function (req, pooja) {
    pooja.writeHead(200, {'Content-Type': 'text/plain'});
    pooja.end('Hello World!');
}).listen(8080);