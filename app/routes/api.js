var express = require('express');
var api = express.Router();

api.post('/new', function(req,res) {
	console.log(req.body);
	var resp = req.body;
	resp.status = 'OK';
	res.status(200).send(resp);
});

module.exports = api;