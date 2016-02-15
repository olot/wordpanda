var fs = require('fs');
var ob = {};


var words = fs.readFileSync("words.txt", "utf8").split("\n");

 function auto (callback) {
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function');
  }
    return callback(err, ob.words);
}

ob.findWord = function (cat) {
  // who wants to volunteer to implement the method?
  var found = [];
  console.log("word", cat);
  console.log(">>>>>>>>", words.length);
  for (var i = 0; i < words.length; i++) {
    if (words[i].search(cat) === 0) {
      found.push(words[i]);
      if(found.length >= 5){
        break;
      }
    }
  }
  console.log(found);
  return found;
};

// var test = new ob();
// test.findWord("cat");


module.exports =  ob;








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
