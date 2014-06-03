var max = 100;
var target = 1000000;

var factorials = (function() {
	var f = [];
	for (var i = 0; i <= max; ++i) {
		f[i] = Utils.getFactorial(i);
	}
	return f;
}());

function combinations(n, r) {
	return factorials[n] / (factorials[r] * factorials[n - r]);
}

console.log('combinations(5, 3)', combinations(5, 3));

var count = 0;
for (var n = 0; n <= max; ++n) {
	for (var r = 0; r <= n; ++r) {
		if (combinations(n, r) > target) {
			++count;
		}
	}
}

console.log('count', count);
