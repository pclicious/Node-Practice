var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user2" : {
      "name" : "rohit",
      "password" : "password2",
      "profession" : "clerk",
      "id": 2
   }
}

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})


app.post('/addUser', function (req, res) {
   // First read existing users.
   //fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     // data = JSON.parse( data );
     // data["user4"] = user["user4"];
	 fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(user["user2"]) , function(err, data) {
			if (err) {
			return console.error(err);
		}
   
	console.log("Data written successfully!");
    console.log( data );
    res.end( JSON.stringify(data));
})
    
   });
   

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})