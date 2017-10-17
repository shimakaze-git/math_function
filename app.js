// node.js サンプルHTTPサーバー
// http://rfs.jp/sb/javascript/node

var mod = require("./mod.js");

var http = require("http");
var listen_port = 8080;

http.createServer(function(req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
    
}).listen(listen_port);

console.log('Server running');
console.log(http);
console.log(mod.printBoo());
console.log(mod);