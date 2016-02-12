var fs = require('fs');
var ob = {};

 ob.import = function(callback) {
   if (!callback || typeof callback !== 'function') {
     return new Error('callback argument MUST be a function');
   }
   var wordfile = __dirname + '/words.txt';
   fs.readFile(wordfile, 'utf8', function (err, data) {
     ob.words = data.split('\n');
     return callback(err, ob.words);
   });
 };

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
