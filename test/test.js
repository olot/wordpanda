var tape = require('tape');
var hyperquest = require('hyperquest');
var server = require('../server.js');
var fs = require('fs');
var handler = require('../handler.js');
var handler = require('../backend.js');

tape("Test 1 = 1", function(el) {
  el.equal(1, 1, "Passed!");
  el.end();
});

tape('After navigating to the Home page the server should return a 200 response', function (t) {
  hyperquest('http://localhost:3000', function (err,res) {
    var data = '';
    res.on('data', function(chunk) {
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
  //     t.ok(found.length, 5, "passed");
  //     t.end();
  // // });
});

tape('get a word from the url', function() {

});
