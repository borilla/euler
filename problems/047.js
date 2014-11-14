
function findConsecutives(consecutiveCount, numFactors) {
	var count = 0;
	var n = 2;
	while (true) {
		var primeFactors = Primes.getPrimeFactors(n);
		if (primeFactors.length == numFactors) {
			count += 1;
			if (count == consecutiveCount) {
				return n - consecutiveCount + 1;
			}
		}
		else {
			count = 0;
		}
		n += 1;
	}
}

console.log('findConsecutives(2, 2)', findConsecutives(2, 2));
console.log('findConsecutives(3, 3)', findConsecutives(3, 3));
console.log('findConsecutives(4, 4)', findConsecutives(4, 4));
