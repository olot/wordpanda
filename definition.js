require('env2')('./config.env');
var apikey = process.env.DEFINE;
var request = require('request');

function define(url, callback){
	var lang = url.split('word.json')[1];
	var word = url.split('')[0].replace('def=', '');
    request("http://api.wordnik.com:80/v4/word.json/" + word, "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&" + api_key, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body).def[0].tr[0].text;
            return callback(result);
        }
    });
}

module.exports = {
    define: define
};
