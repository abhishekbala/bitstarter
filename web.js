var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

fs.readFileSync('./index.html', 'encoding');
var buffer = new Buffer(16);
var bufferStr = buffer.toString(fileBuffer);

app.get('/', function(request, response) {
  response.send(fileBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
