var express = require('express');
var mongoose = require('mongoose');
var async = require('async');
var _ = require('lodash');
// mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/wikicause');

var ObjectId = mongoose.Schema.Types.ObjectId;
var Id = mongoose.Types.ObjectId;

var Leafs = mongoose.model('leafs', {});
var Events = mongoose.model('events', {});
var Users = mongoose.model('users', {});
var Cache = mongoose.model('cache', {});

var api = express.Router();

api.get('/', function(req, res) {
  res.send('woo');
});


api.get('/new', function(req,res) {
	res.send('POST requests only');
});

api.post('/new', function(req,res) {
	console.log(req.body);

	res.send(200);
});

api.get('/list', function(req, res) {
  Leafs.find({}, {
    children: 1
  }, function(err, data) {
    res.json(data);
  });
});

module.exports = api;