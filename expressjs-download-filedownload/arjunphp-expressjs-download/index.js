var http = require('http');
const express = require('express'); // import express js library
const app = express(); //create express js instance 
const path = require('path');

// define a route to download a file 
app.get('/download/:file(*)',function(req, res){
  var file = req.params.file;
  var fileLocation = path.join('./uploads',file);
  console.log(fileLocation);
  res.download(fileLocation, file); 
}).listen(8000,() => {
  console.log(`application is running at: http://localhost:8000`);
});


	// app.post('/download', function(req, res){
  // var file = __dirname + '/file-folder/salesReport.pdf';
  // res.download(file);
	// });