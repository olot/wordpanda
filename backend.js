var fs = require('fs');
var ob = {};


var words = fs.readFileSync("words.txt", "utf8").split("\n");

 function auto (callback) {
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function');
  }
    return callback(err, ob.words);
}

ob.findWord = function (word) {
  // who wants to volunteer to implement the method?
  var found = [];
  for (var i = 0; i < ob.words.length; i++) {
    if (ob.words[i].search(word) === 0) {
      found.push(ob.words[i]);
      if(found.length >= 5){
        break;
      }
    }
  }
  console.log(found);
  return found;
};


module.exports =  ob;
// var fs = require("fs");
// var words = fs.readFileSync("words.txt", "utf8").split("\n");
//
// function autocomplete( url ){
//     var userInput = url.replace("/word=","");
//     var results = [];
//     var check = '^' + userInput.toLowerCase();
//     var re = new RegExp( check );
//     for( var i=0, x=words.length-1; i < x ; i++ ){
//         var lowerWord = words[i].toLowerCase();
//         if( lowerWord.match( re ) ){
//             results.push( lowerWord );
//             if( results.length >= 10 ){
//                 break;
//             }
//         }
//     }
//     return results;
// }

// module.exports = {
//     words        :   words,
// };






//
// module.exports = function handler(req, res) {
//     if (req.url.length === 1) {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.write("Welcome");
//         res.end(" to Testing");
//     }
//     if (req.url.indexOf('richard') > -1) {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end("<h1>Richard</h1>");
//     }
//     // if (req.url.indexOf('post-at-me-bro') > -1) {
//     //     res.writeHead(200, {"Content-Type": "text/html"});
//     //     res.end("posted-me");
//     // }
//     else {
//         res.end();
//     }
// };
