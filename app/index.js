var express = require('express');
var logger = require('morgan');
var hbs = require('express-hbs');

// var routes = require('./routes');
var app = express();

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express3({
  // partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname + '/views/layout.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res) {
	res.render('index');
});

app.get('/new', function(req,res) {
	res.render('item');
});

app.get('/edit', function(req,res) {
	res.render('item');
});

// app.use('*', routes);

var PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log('Listening on port ' + PORT);