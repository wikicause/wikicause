function bezCurve(s,e) {
	var coords = {
		0: s,
		1: e
	};

	var z = '';
	var a,b,c,d;

	a = (coords[0][0] + coords[1][0])/2;
	b = coords[0][0];
	c = (coords[0][0] + coords[1][0])/2;
	d = coords[1][1];

	z += 'M';
	z += coords[0][0]+' '+coords[0][1];

	z += ' C ';
	z += a+' '+b+', '+c+' '+d+', ';
	z += coords[1][0]+' '+coords[1][1];

	// console.log(z);
	// console.log("M100 100 C 150 100, 150 150, 200 150");

	return z;
}

console.log(bezCurve([100,100],[300,150]));