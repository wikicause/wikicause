var express = require('express');
var logger = require('morgan');
var hbs = require('express-hbs');

var bodyParser = require('body-parser');

var fs = require('fs');

var api = require(__dirname+'/routes/api');

// var routes = require('./routes');
var app = express();

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express3({
  // partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname + '/views/layout.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/new', function(req, res) {
  res.render('item');
});

app.get('/get', function(req, res) {
  fs.readFile((__dirname + '/public/js/example.json'), 'utf-8', function(err, data) {
    var nodes = [];
    data = JSON.parse(data);
    data.forEach(function(r) {
      var index = nodes.length;

      if (r.f && r.m) {
        console.log('inout', r.f, r.m);
      } else if (r.f) {
        console.log('forkd', r.f);
      } 

      if (!r.m) {
      	console.log('trail', index+'x');
        nodes.push([]);
      }

      r.d.forEach(function(c) {
        // console.log(c);
      });
    });
    res.send(nodes);
  });
});

// app.use('*', routes);

var PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log('Listening on port ' + PORT);