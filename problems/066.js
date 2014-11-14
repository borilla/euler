
// get continued fraction representation of square root of n, as an array
function continuedFractionRoot(n, terms) {
	var a = [Math.floor(Math.sqrt(n))];
	var b = [a[0]];
	var c = [1];
	var x, t;

	if (a[0] * a[0] == n) {
		return a;
	}

	for (x = 1; x < terms; ++x) {
		c[x] = (n - b[x - 1] * b[x - 1]) / c[x - 1];
		t = b[x - 1] + a[0];
		b[x] = a[0] - (t % c[x]);
		a[x] = (t / c[x]) >> 0;
	}
	return a;
}

// get rational fraction convergent from continuous fraction
function convergent(cf) {
	var l = cf.length;
	var n = new BigNum(cf[l - 1]);
	var d = new BigNum(1);
	for (var i = l - 2; i >= 0; --i) {
		var temp1 = n;
		n = d;
		d = temp1;
		var temp2 = new BigNum(cf[i]);
		temp2.mul(d);
		n.add(temp2);
	}
	return [n, d];
}

var max = 1000;
var results = [];

// no proper solutions for squares
for (var d = 0; d * d <= max; ++d) {
	addResult(d * d, new BigNum(1), new BigNum(0));
}

// get x and y for all other d-values
for (var d = 2; d <= max; ++d) {
	if (!results[d]) {
		var terms = 0;
		do {
			terms += 1;
			var cf = continuedFractionRoot(d, terms);
			var c = convergent(cf);
			var x = c[0];
			var y = c[1];
			var x2 = BigNum.mul(x, x);
			var y2 = BigNum.mul(y, y);
			var k = new BigNum(-d);
			k.mul(y2);
			k.add(x2);
		}
		while (k != '1');
		addResult(d, x, y);
	}
}

// find result where x is maximum
var maxX = results.reduce(function(curr, prev) {
	return curr.x.gt(prev.x) ? curr : prev;
});

console.log('maxX', maxX);
