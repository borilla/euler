function matchesFactorsUpTo(n, m) {
	for (var factor = m; factor > 1; --factor) {
		if (n % factor != 0) {
			return false;
		}
	}
	return true;
}

var m = 20;
var inc = m - 1;
var n = inc;
while (!matchesFactorsUpTo(n, m)) {
	n += inc;
}
console.log(n);
