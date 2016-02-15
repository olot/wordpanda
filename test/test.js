var tape = require('tape');
var hyperquest = require('hyperquest');
var backend = require('../backend.js');
var fs = require('fs');
var shot = require('shot');
var server = require('../server.js');

tape("Test 1 = 1", function(el) {
  el.equal(1, 1, "Passed!");
  el.end();
});


tape("Does server return the html page?", function(t){
    shot.inject(server.handler, {method: 'GET', url: 'http://localhost:3000'}, function(res){
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

tape('when the url contains "/define" the findwords method should be invoked', function (t) {
  hyperquest('http://localhost:3000/define', function (err, res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk.toString('utf8');
      console.log('data: '+ data);
    });
    res.on('end', function() {
      t.ok(data.indexOf('[]') > -1, "woooo");
      t.end();
    });
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



tape('test the length of the array, it should return 5', function(t) {
  shot.inject(server.handler, {method: 'GET', url: 'http://localhost:3000/word=blah'}, function(res){
      var actual = res.payload;
      var result = 'blah blah';
      t.deepEqual=(actual, result, "server returns expected array length and expected result.");
      t.end();
    });
});


tape('autocomplete should have the correct content',function(t){
    var actual1     = ob.findWord[0];
    var expected1   = "A";
    t.equals(actual1,expected1,"words.txt has the correct 1st word");

    var actual2     = ob.findWord[ob.findwords.length - 2];
    var expected2   = "Zyzzogeton";
    t.equals(actual2,expected2,"words.txt has the correct last word");
});


// var test = require('tape');
// var hyperquest = require('hyperquest');
// var concat = require('concat-stream');
// var server = require('../server.js');
// var colors = require('colors');
//
// test('Home page', function(t) {
//     hyperquest('http://localhost:4000', function(err, res) {
//         //   console.log(res);
//         t.equal(res.statusCode, 200);
//         t.end();
//     });
// });
//
// test('Going to /name/richard returns an h1 with Richard inside', function(t) {
//     hyperquest('http://localhost:4000/name/richard', function(err, res) {
//         var data = '';
//         res.on('data', function(chunk) {
//             data += chunk.toString('utf8');
//         });
//         res.on('end', function() {
//             t.equals(data, '<h1>Richard</h1>');
//             t.end();
//         });
//         // res.pipe(concat(function(payload) {
//         //     console.log(payload.toString('utf8'));
//         //     t.equals(payload.toString('utf8'), '<h1>Richard</h1>');
//         //     t.end();
//         // }));
//     });
// });
//
// test('Posting a request to /post-at-me-bro should return the data that was posted', function(t) {
//     var reqAndRes = hyperquest.post('http://localhost:4000/post-at-me-bro');
//     reqAndRes.end('post at me bro');
//     var data = '';
//     reqAndRes.on('data', function(chunk) {
//         data += chunk.toString('utf8');
//     });
//     reqAndRes.on('end', function() {
//         t.equals(data, 'post at me bro');
//         t.end();
//     });
//     // reqAndRes.pipe(concat(function(dataBody) {
//     //     t.equals(dataBody.toString('utf8'), 'post at me bro');
//     //     t.end();
//     // }));
// });
//
// test('teardown', function(t) {
//     server.close();
// //     t.end();
// });
