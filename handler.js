var http = require('http');
var fs = require('fs');
var ob = require('./backend.js');
var index = fs.readFileSync(__dirname + '/index.html');

function handler(request, response) {

  var url = request.url;

    if (url.length === 1) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(index.toString());
    }

    else if (url.indexOf("/define") > -1) {
      var match = ob.findWord(word);

  }

  else if (url === '/favicon.ico') {

    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
  }

  else {
  response.end('hello world!');
  }
}

module.exports  = handler;
