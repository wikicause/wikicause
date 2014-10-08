var request = require('request');

var nodes = [
  ['00', '01', '02', '03', '04', '05'],
  ['ff', '11', '12', 'ff', 'ff', '31'],
  ['ff', 'ff', '21', '22', '23', '24']
];

request({
	url: 'http://localhost:8080/api/list',
	json: true
}, function(e, r, b) {
  if (e) console.log('error:', e);
  console.log(b);
});