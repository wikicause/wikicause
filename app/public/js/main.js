var nodes = [
  ['00', '01', '02', '03', '04', '05'],
  ['ff', '11', '12', 'ff', 'ff', '31'],
  ['ff', 'ff', '21', '22', '23', '24']
];

function bezCurve(s, e) {
  var coords = {
    0: s,
    1: e
  };

  var z = '';
  var a, b, c, d;

  a = (coords[0][0] + coords[1][0]) / 2;
  b = coords[0][1];
  c = (coords[0][0] + coords[1][0]) / 2;
  d = coords[1][1];

  console.log(a,b,c,d);

  z += 'M';
  z += coords[0][0] + ' ' + coords[0][1];

  z += ' C ';
  z += a + ' ' + b + ', ' + c + ' ' + d + ', ';
  z += coords[1][0] + ' ' + coords[1][1];

  return z;
}

function plotPaths(n) {
  var svg = '\n<g class="paths">\n';

  n.forEach(function(r, i) {
    var q = i;
    r.forEach(function(c, i) {
    	var x,y,s,e;

    	if(c == 'ff' && r[i+1] !== 'ff') {

    		x = i * 100;
	        y = (q*50)-50;

	        x += 25;
	        y += 25;

	        s = [x,y];
	        e = [(i*100)+125,y+50];

	        console.log(s,e);

    		svg += '\t<path d="'+bezCurve(s,e)+'" />\n';

    	} else if(c !== 'ff') {
    		x = i * 100;
	        y = q * 50;

	        x += 25;
	        y += 25;

	        s = [x,y];
	        e = [(i*100)+125,y];

	        if(r[i+1] === 'ff') {
	        	e = [(i*100)+125,((q-1)*50)+25];
	        }

	        console.log(s,e);

    		svg += '\t<path d="'+bezCurve(s,e)+'" />\n';
    	}
    });
  });

  svg += '</g>\n';

  console.log(svg);

  return svg;
}

function plotNodes(n) {
  var groups = {};

  n.forEach(function(r, i) {
    var q = i;
    r.forEach(function(c, i) {
      if (c !== 'ff') {
      	console.log(c[0]);

        var x = i * 100;
        var y = q * 50;

        x += 25;
        y += 25;

      	var p = '<circle cx="' + x + '" cy="' + y + '" r="15"/>';

        if(!groups[c[0]]) {
      		groups[c[0]] = [p];
      	} else {
      		groups[c[0]].push(p);
      	}
      }
    });
  });
  
  var svg = '';

  Object.keys(groups).forEach(function(e) {
  	svg += '<g class="g'+e+'">\n\t';
  	svg += groups[e].join('\n\t');
  	svg += '\n</g>\n';
  });

  console.log(svg);

  return svg;
}

function go() {
  var n = nodes;

  var svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">';
  svg += '<g id="paths">';
  svg += plotPaths(n);
  svg += plotNodes(n);
  svg += '</svg>';

  console.log(svg);
  $('.graph').append(svg);
}

go();
// plotNodes();