var fs = require('fs');

fs.unlink('C:/node practice/New Text Document.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});