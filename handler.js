var http = require('http');
var fs = require('fs');
var ob = require('./backend.js');
var index = fs.readFileSync(__dirname + '/index.html');
var server = http.createServer(handler);
var define = require('./definition.js');

function handler(req, res) {
  var url = req.url;
  console.log("request.url:", url);

  if (url.length === 1) {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end(index.toString());
  }

	else if (url.indexOf("/suggestedwords") > -1) {
    var userInput = url.split('/')[2].toString();
    console.log(userInput);
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    var suggestedWords = ob.findWord(userInput);
    res.end(suggestedWords.toString());
  }

	else if (url.indexOf("/define") > -1) {
    var wordToBeDefined = url.split('/')[2].toString();
    define.defineWord(wordToBeDefined, function(definition) {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(definition);
    });

  }

	else if (url === '/favicon.ico') {

    res.writeHead(200, {
      'Content-Type': 'image/x-icon'
    });
    res.end();
  }

	else {
    fs.readFile(__dirname + url, function(error, file) {
      if (error) {
        res.writeHead(404, {'Content-Type': 'text/'});
        res.end('NOT FOUND!');
      }

			else {
        var ext = url.split('.')[1];
        res.writeHead(200, {
          'Content-Type': 'text/' + ext
        });
        res.end(file);
      }
    });
  }
}


module.exports = handler;
