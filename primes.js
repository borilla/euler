var primes = [2,3];
primes.next = (function() {
	function isPrime(n) {
		for (var i = 0, l = primes.length; i < l; ++i) {
			var prime = primes[i];
			if (n % prime == 0) {
				return false;
			}
		}
		return true;
	}

	function next() {
		var n = primes[primes.length - 1];
		do {
			n += 2;
		}
		while (!isPrime(n));
		return n;
	}

	return function() {
		var n = next();
		primes.push(n);
		return n;
	};
}());
