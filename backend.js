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
  //console.log(">>>>>>>>>>WORD", cat);
  //console.log(">>>>>>>>", words.length);
  var wordSearchedFor = new RegExp("^" + cat, 'g');
  var matches = words.filter(function(word) {
    return word.match(wordSearchedFor);
  });
  return matches.splice(0, 5);
  // for (var i = 0; i < words.length; i++) {
  //   if (words[i].match(wordSearchedFor)) {
  //     console.log('xctfvygbhunjvtcr');
  //     matchingWordsArray.push(words[i]);
  //     if (matchingWordsArray.length >= 5) {
  //       break;
  //      }
  //     //  else {
  //     //   matchingWordsArray;
  //     // }
  //   // } else {
  //       // console.log('no words matched!!');
  //   }
  // }
  // return matchingWordsArray;
};

// var test = new ob();
// test.findWord("cat");


module.exports =  ob;
