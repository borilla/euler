
function isTruncateablePrime(num) {
	function isPrime(str) {
		return Primes.isPrime(+str);
	}

	var str = num.toString();
	for (var i = 1, l = str.length, j = l - 1; i < l; ++i, --j) {
		var t1 = str.slice(0, i);
		var t2 = str.slice(j);
		if (!isPrime(t1) || !isPrime(t2)) {
			return false
		}
	}
	return true;
}

console.log('isTruncateablePrime(3797)', isTruncateablePrime(3797));

function getTruncateablePrimes(n) {
	var results = [];
	Primes.reset();
	while (results.length < n) {
		prime = Primes.calculateNext();
		if (prime > 7 && isTruncateablePrime(prime)) {
			results.push(prime);
		}
	}
	return results;
}

console.log('getTruncateablePrimes(3)', getTruncateablePrimes(3));
console.log('getTruncateablePrimes(7)', getTruncateablePrimes(7));
console.log('getTruncateablePrimes(11)', getTruncateablePrimes(11));

console.log('sum', Utils.arraySum(getTruncateablePrimes(11)));
