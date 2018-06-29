var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname + '/text.txt');
var compressed = fs.createWriteStream(__dirname +'/destination.txt.gz');
console.log('zippping.... and done!');

readable.pipe(gzip).pipe(compressed);