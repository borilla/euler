function totient(n) {
	var factors = Primes.getPrimeFactors(n);
	var num = n;
	var denom = 1;
	factors.forEach(function(factor) {
		num *= factor - 1;
		denom *= factor;
	});
	return num / denom;
}

var permutations = [];
for (var n = 2; n < 1e7; ++n) {
	if (n % 500000 == 0) {
		console.log(n, '...');
	}
	var phi = totient(n);
	if (Utils.isPermutationOf('' + n, '' + phi)) {
		permutations.push({
			n: n,
			phi: phi
		});
	}
}

console.log('permutations', permutations);

var min = permutations.reduce(function(cur, prev) {
	return (cur.n / cur.phi < prev.n / prev.phi) ? cur : prev;
});

console.log('min', min);
