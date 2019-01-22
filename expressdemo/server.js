var express = require('express')();
//var app = express();

express.get('/', function (req, res) {
   res.send('Hello World');
   res.send(req.get('content-type'));
}).listen(8080);

//var server = app.listen(8080, function () {
//   var host = server.address().address
//   var port = server.address().port
   
 //  console.log("Example app listening at http://%s:%s", host, port)
//})