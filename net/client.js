var net = require('net');

var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');  
   client.write('client\r\n');
   
   //client.pipe(client);
   
   client.on('data', function(data) {
   console.log(data.toString());
   delete data;
   client.end();
});
   
});





client.on('end', function() { 
   console.log('disconnected from server');
});

client.on('error', function(err) {
   //console.log(err.stack);
});