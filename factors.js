Factors = (function() {
	function primeFactors(n) {
		var factors = [];
		var primes = Primes.getPrimesTo(n / 2);
		for (var i = 0, l = primes.length; i < l; ++i) {
			var prime = primes[i];
			if (n % prime == 0) {
				factors.push(prime);
			}
		}
		if (Primes.isPrime(n)) {
			factors.push(n);
		}
		return factors;
	}

	function sort(arr) {
		return arr.sort(function(a, b) {
			return (a < b) ? -1 : (a == b) ? 0 : 1;
		});
	}

	function allFactors(n) {
		var factors = primeFactors(n);
		var multiples = {};

		function addFactorMultiples(factor) {
			for (var i = 0, l = factors.length; i < l; ++i) {
				var multiple = factor * factors[i];
				if (!multiples[multiple]) {
					if (n % multiple == 0) {
						factors.push(multiple);
						multiples[multiple] = true;
					}
				}
			}
		}

		for (var i = 0; i < factors.length; ++i) {
			addFactorMultiples(factors[i]);
		}

		factors.push(1);
		return sort(factors);
	}

	return {
		primeFactors: primeFactors,
		allFactors: allFactors
	};
}());
