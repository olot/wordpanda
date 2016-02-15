var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./backend.js');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response) {
  var url = request.url;
  console.log("request.url:", url);

  if (url.length === 1) {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.end(index.toString());
  }

  else if (request.url.indexOf('/suggestedwords') > -1) {
    var userInput = request.url.split('/')[2].toString();
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    //TODO call findword method
    var testArray = ['help', 'helical', 'helium', 'hello'];
    response.end(testArray.toString());
  }

  else if (request.url.indexOf('/define') > -1) {
    var wordToDefine = request.url.split('/')[2].toString();
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    //TODO call findword method
    var testDefinition = 'the definition that we got back from the server';
    response.end(testDefinition.toString());
  }

  else {
    fs.readFile(__dirname + url, function(error, file) {
      if (error) {
        console.log(error);
        response.end();
      } else {
        var ext = url.split('.')[1];
        response.writeHead(200, {
          'Content-Type': 'text/' + ext
        });
        response.end(file);
      }
    });
  }

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
