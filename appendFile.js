var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'hfxghfghfxgh',function (err,file) {
  if (err) throw err;
  //console.log('Saved!');
});