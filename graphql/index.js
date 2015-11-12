// require('babel/register');
require('./graphql-server.js');

var express = require('express');

var app = express();
var PORT = 3000;

app.post('/graphql', function(req, res) {
  res.send("Hello");
});

var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Server is listening at http://%s:%s", host, port);
});