function fractionalRoot(n) {
	var a = [Math.floor(Math.sqrt(n))];
	var b = [a[0]];
	var c = [1];
	var x, t;

	if (a[0] * a[0] == n) {
		return a;
	}

	for (x = 1; x < 1000; ++x) {
		c[x] = (n - b[x - 1] * b[x - 1]) / c[x - 1];
		t = b[x - 1] + a[0];
		b[x] = a[0] - (t % c[x]);
		a[x] = (t / c[x]) >> 0;
		if (isRepeat(b[x], c[x])) {
			return a;
		}
	}

	function isRepeat(_b, _c) {
		for (var i = 0, l = a.length - 1; i < l; ++i) {
			if (b[i] == _b && c[i] == _c) {
				return true;
			}
		}
		return false;
	}
}

for (var n = 1; n < 14; ++n) {
	console.log(n, fractionalRoot(n));
}
console.log(23, fractionalRoot(23));

function countOddPeriods(from, to) {
	var count = 0;
	for (var n = from; n <= to; ++n) {
		var f = fractionalRoot(n);
		var period = f.length - 1;
		if (period % 2) {
			++count;
		}
	}
	return count;
}

console.log('countOddPeriods(1, 13)', countOddPeriods(1, 13));
console.log('countOddPeriods(1, 10000)', countOddPeriods(1, 10000));
