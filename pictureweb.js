var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'image/jpg'});
    
    // Reading Image 
     //First: Reading file Synchronously
    //Took exact 9 seconds with 5 GET requests
    // fs.readFile(path.join(__dirname,'landmark.jpg'),function(err,pic){
    //     if(err) throw err;
    //     res.end(pic);
    // });

    // Reading Image Synchronosily
    // it took about 40 secs to load the image with image not displayed yet
    // fs.readFileSync(path.join(__dirname, 'landmark.jpg'), function(err, img){
    //         if (err) throw err;
    //         res.end(img);

    //reading Image using stream
     //took exact 9 seconds with 5 GET requests
    fs.createReadStream(path.join(__dirname, 'landmark.jpg')).pipe(res);
}).listen(3000)
console.log("Started listening on port 3000.");