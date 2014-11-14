function countConsecutivePrimes(a, b) {
	var n = 0;
	while (Primes.isPrime(n * n + a * n + b)) {
		n += 1;
	}
	return n;
}

var max = {
	n: 0,
	a: 0,
	b: 0
};

for (var a = -999; a < 1000; ++a) {
	for (var b = -999; b < 1000; ++b) {
		var n = countConsecutivePrimes(a, b);
		if (n > max.n) {
			max = {
				a: a,
				b: b,
				n: n
			};
			console.log('max:', max);
		}
	}
}

console.log('product of a and b:', max.a * max.b);
