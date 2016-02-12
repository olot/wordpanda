var test = require('tape');
var port = process.env.PORT || 3000;
var http = require('http');
var fs = require('fs');
var ac = fs.readFileSync('./index.html');

function handler(request, response){
  var url = request.url;
  if (url.length === 1){
    response.writeHead(200, {"Content-Type":"text/html"}); {
      console.log(response.payload);
      response.end(ac);
  }

}else{
  //reponse.end("Hello World!");
}
}
module.exports = {

  handler: handler
};





//var index = fs.readFileSync(__dirname + '/index.html');
http.createServer(handler).listen(port);
console.log('node http server listening on http://localhost:' + port);
