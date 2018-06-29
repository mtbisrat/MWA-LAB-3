var fs = require('fs');
var zlib = require('zlib');
var gunzip = zlib.createGunzip();

var compressed = fs.createReadStream(__dirname + '/destination.txt.gz');
var readable = fs.createWriteStream(__dirname + '/unzipped.txt');

console.log('unzipping and writing on unzipped text');
compressed.pipe(gunzip).pipe(readable);
