var fs = require('fs');

fs.writeFile('mynewfile3.txt','', function (err) {
  if (err) throw err;
  console.log('Saved!');
});