// require('env2')('./config.env');
var http = require("http");
var port = process.env.PORT || 3000;
var fs = require("fs");
var handler = require('./handler.js');
var ob = require('./backend.js');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(handler).listen(port);

console.log("Node http server listening on http://localhost:" + port);
