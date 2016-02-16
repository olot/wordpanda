// require('env2')('./config.env');
var http = require("http");
var port = process.env.PORT || 3000;
var fs = require("fs");
var handler = require('./handler.js');
var ob = require('./backend.js');
var index = fs.readFileSync(__dirname + '/index.html');

console.log("Node http server listening on http://localhost:" + port);

var server = http.createServer(handler);

module.exports = {
	handler: handler,
	server: server
};

server.listen(port);
