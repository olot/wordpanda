var http = require('http');
var fs = require('fs');
var ob = require('./backend.js');
var index = fs.readFileSync(__dirname + '/index.html');
var server = http.createServer(handler);
var word = "cat";


//       response.end(index.toString());
//     }
//

//   else {
//   response.end('hello world!');



function handler(req, res) {
	var url = req.url;
	if (url.length === 1) {
		res.writeHead(200, {"Content-type": "text/html"});
		fs.readFile(__dirname.replace("/define", "") + '/index.html', function(err, data) {
			res.end(data);
		});
	} else if (url.indexOf("/define") > -1) {
    ob.findWord(word);
  }

  else if (url === '/favicon.ico') {

      response.writeHead(200, {'Content-Type': '/favicon.ico'} );
      response.end();
    }
  else {
		fs.readFile(__dirname.replace("/define", "") + url, function(error, file){
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


module.exports = handler;
