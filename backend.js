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
  matchingWordsArray = [];
  console.log('----'+cat+'---');
  var wordSearchedFor = new RegExp("^" + cat, 'g');
  var matches = words.filter(function(word) {
    return word.match(wordSearchedFor);
  });
  return matches.splice(0, 5);
};

module.exports =  ob;
