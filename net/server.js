var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('data', function(data) {
   console.log(data.toString());
	});
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello from server\r\n');
   connection.pipe(connection);
   
   connection.on('error', function(err) {
   console.log(err.stack);
});

});

server.listen(8080, function() { 
   console.log('server is listening');
});