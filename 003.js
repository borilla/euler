function primefactors(n) {
	var factors = [];
	for (var factor = 2, max = n; factor <= max + 1; ++factor) {
		if (n % factor == 0) {
			factors.push(factor);
			while (n % factor == 0) {
				n /= factor;
			}
		}
		max = n / factor;
	}
	if (n != 1) {
		factors.push(n);
	}

	return factors;
}

console.log(primefactors(13195));
console.log(primefactors(19));
console.log(primefactors(600851475143));
