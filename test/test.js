var tape = require('tape');
var shot = require('shot');
// var dispatch = require('dispatch');
var hyperquest = require('hyperquest');
var backend = require('../backend.js');
var fs = require('fs');
var server = require('../server.js');
var handler = require('../handler.js');

// Server testing
tape("Test 1 = 1", function(el) {
  el.equal(1, 1, "Passed!");
  el.end();
});

tape("Does server return the html page?", function(t){
    shot.inject(server.handler, {method: 'GET', url: '/'}, function(res){
        t.notEqual(res.payload.indexOf("<!DOCTYPE html>"), -1, 'server returns html page');
        t.end();
    });
});

tape('After navigating to the Home page the server should return a 200 response', function (t) {
  hyperquest('http://localhost:3000', function (err,res) {
    var data = '';
    res.on(data, function(chunk) {
      data += chunk.toString('utf8');
    });
    res.on('end', function() {
      t.equal(res.statusCode, 200, "passed");
      t.end();
    });
  });
});

tape('Checking that the client has recived the html <h1> tag', function (t) {
  hyperquest('http://localhost:3000', function (err, res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk.toString('utf8');
    });
    res.on('end', function() {
      t.ok(data.indexOf('<h1>Word Panda</h1>') > -1, "woooo");
      t.end();
    });
  });
});

tape('test all endpoints exist', function (t) {
  var endpointUrl = '/define';
  shot.inject(server.handler, {method: 'GET', url: endpointUrl}, function(res){
    t.equal(res.statusCode, 200, 'endpoint exists');
    t.end();
  });
});

tape("Does server return css or javascript pages", function(t){
    shot.inject(server.handler, {method: 'GET', url: 'http://localhost:3000/style.css'}, function(res){
        fs.readFile(__dirname.replace("/test", "") + '/style.css', function(err, cssText) {
            t.equal(res.payload, cssText.toString(), 'server returns css page');
            t.end();
        });
    });
});

tape("Does server return 404 and 'Not found' for unknown URL?", function(t){
    shot.inject(server.handler, {method: 'GET', url: 'http://localhost:3000/unknownURL8439'}, function(res){
        t.equal(res.statusCode, 404, "server returns 404");
        t.end();
    });
});

// tape('autocomplete should have the correct content',function(t){
//     var actual1     = backend.findWord[0];
//     var expected1   = "A";
//     t.equals(actual1,expected1,"words.txt has the correct 1st word");
//
//     var actual2     = backend.findWord[backend.findWord.length - 2];
//     var expected2   = "Zyzzogeton";
//     t.equals(actual2,expected2,"words.txt has the correct last word");
//     t.end();
// });

// tape("Server responds with a maximum array of 5 words from a minimum 3-character user input", function(t){
//     shot.inject(backend.findWord, {method: 'GET', url: '/suggestedwords/cat'}, function(res){
//         var actual = [];
//         var result = JSON.parse(res);
//         for(var i=0;i<5;i++){
//             actual.push(result.results[i][0]);
//         }
//         var expected = [ 'cat', 'catabaptist', 'catabases', 'catabasis', 'catabatic' ];
//         t.deepEqual(actual, expected, '"cat" returns 5 words beginning with cat');
//         t.end();
//     });
// });

tape("Test to check that findWord function returns expected values", function(t){
  var actual =backend.findWord('cat');
  var result = [ 'cat', 'catabaptist', 'catabases', 'catabasis', 'catabatic' ];
  t.deepEqual(actual,result, "yay lots of cats (5)");
});



tape("teardown", function(t){
    server.server.close();
    t.end();
});
