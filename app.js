const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    console.log('request was made' + req.url);
    if(req.url === '/Homepage' || req.url==='./'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/Homepage.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/About'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname +'/About.html').pipe(res);
    }
     else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname +'/Homepage.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('Server listeneing on port 3000');

