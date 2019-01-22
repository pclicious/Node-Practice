var http = require('http');
var uc = require('upper-case');
var lc = require('lower-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
	res.write(lc("Hello World!"));
    res.end();
}).listen(8080);