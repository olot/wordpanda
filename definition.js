require('env2')('./config.env');
var api_key = process.env.API_KEY;
var request = require('request');

function defineWord(wordToBeDefined, callback) {
  console.log('defineword is getting called');
  var url = "http://api.wordnik.com:80/v4/word.json/" + wordToBeDefined + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=" + api_key;
  console.log(url);
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var JSONArray = JSON.parse(body)[0];
      var definition;
      if(JSONArray){
        definition = JSONArray.text;
      }
      else {
        definition = 'Sorry no definition!';
      }
      console.log("defintion in back end ----->", definition);
      return callback(definition);
    }
  });
}

module.exports = {
  defineWord: defineWord
};
