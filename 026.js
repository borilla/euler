// long division

function countRepeatingTerms(n, d) {
	var r = {};
	while (true) {
		while (n < d) {
			n *= 10;
		}
		n = n % d;
		if (n == 0) {
			return 0;
		}
		if (r[n]) {
			return r[n];
		}
		for (var i in r) {
			r[i]++;
		}
		r[n] = 1;
	}
}

var max = {
	d: 0,
	c: 0
};

for (var d = 1; d <= 1000; ++d) {
	var c = countRepeatingTerms(1, d);
	if (c > max.c) {
		max = {
			d: d,
			c: c
		}
	}
}

console.log('max:', max);
