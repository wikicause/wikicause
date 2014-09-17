var express = require('express');
var logger = require('morgan');

// var routes = require('./routes');
var app = express();

app.use(express.static(__dirname+'/public'));
// app.use('*', routes);

var PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log('Listening on port ' + PORT);