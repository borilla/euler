
function getConsecutivePrimes(n, primes) {
	primes = primes || Primes.getPrimesTo(n);
	var length = primes.length;
	for (var i = 0; i < length; ++i) {
		if (primes[i] > n) {
			return;
		}
		var arr = [];
		var sum = 0;
		var j = i;
		while (sum < n && j < length) {
			var prime = primes[j];
			sum += prime;
			arr.push(prime);
			++j;
		}
		if (sum == n) {
			return {
				n: n,
				primes: arr
			};
		}
	}
}

console.log('getConsecutivePrimes(41)', getConsecutivePrimes(41));

function getLongestPrimeSumTo(n) {
	var max = {
		primes: []
	};

	var primes = Primes.getPrimesTo(n);
	for (var i = 0, l = primes.length; i < l; ++i) {
		var prime = primes[i];
		var p = getConsecutivePrimes(prime, primes);
		if (p && p.primes.length > max.primes.length) {
			max = p;
		}
	}

	if (max.primes.length) {
		return max;
	}
}

console.log('getLongestPrimeSumTo(100)', getLongestPrimeSumTo(100));
console.log('getLongestPrimeSumTo(1000000)', getLongestPrimeSumTo(1000000));
