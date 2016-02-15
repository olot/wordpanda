//
// require('env2')('./config.env');
var http = require("http");
var fs = require("fs");
var handler = require('./handler.js');
var ob = require('./backend.js');
var index = fs.readFileSync(__dirname + '/index.html');
var port = process.env.PORT || 3000;


function handler(req, res) {
	var url = req.url;
	if (url.length === 1) {
		res.writeHead(200, {"Content-type": "text/html"});
		fs.readFile(__dirname.replace("/src", "") + '/index.html', function(err, data) {
			res.end(data);
		});
	} else {
		fs.readFile(__dirname.replace("/src", "") + url, function(error, file){
  			if (error) {
				res.writeHead(404, {'Content-Type' : 'text/'});
    			res.end('NOT FOUND!');
  			} else {
    			var ext = url.split('.')[1];
			    res.writeHead(200, {'Content-Type' : 'text/' + ext});
			    res.end(file);
  			}
		});
	}
}

var server = http.createServer(handler);

module.exports = {
	handler: handler,
	server: server
};

server.listen(port);

console.log("Local host at " + port);








//
//
//
//
//
//
//
//
//
//
// var http = require('http');
// var port = process.env.PORT || 3000;
// var backend = require('./backend.js');
// var fs = require('fs');
// var index = fs.readFileSync(__dirname + '/index.html');
// ob.import(function(){});
// var word = "co";
//
//
//
// http.createServer(function handler(request, response) {
//
// var url = request.url;
//
//   if (url.length === 1) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.end(index.toString());
//   } else if (url.indexOf("/define") > -1) {
//   var match = ob.findWord(word);
//
// } else if (url === '/favicon.ico') {
//
// response.writeHead(200, {'Content-Type': 'image/x-icon'} );
// response.end();
// }
// response.end('hello world!');
//
// }).listen(port);
//
//
//
// console.log('node http server listening on http://localhost:' + port);
//
//
// ob.import = function(callback) {
//   if (!callback || typeof callback !== 'function') {
//     return new Error('callback argument MUST be a function');
//   }
//   var wordfile = __dirname + '/words.txt';
//   fs.readFile(wordfile, 'utf8', function (err, words) {
//     ob.words = data.split('\n');
//     return callback(err, ob.words);
//   });
// };
//
//
// module.exports = {
//
//   handler: handler,
//   import: ob
// };


http.createServer(handler).listen(port);
console.log('node http server listening on http://localhost:' + port);
