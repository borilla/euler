
function getLongestPrimeSumTo(limit) {
	var primes = Primes.getPrimesTo(limit);
	var primesObj = {};
	primes.forEach(function(prime) {
		primesObj[prime] = true;
	});
	var max = {
		length: 0
	};
	for (var i = 0, l = primes.length; i < l; ++i) {
		var sum = 0;
		for (var j = i; j < l && sum < limit; ++j) {
			sum += primes[j];
			if (sum < limit) {
				if (primesObj[sum]) {
					var length = j - i + 1;
					if (length > max.length) {
						max = {
							prime: sum,
							i: i,
							length: length,
						}
					}
				}
			}
		}
	}
	max.sum = primes.slice(max.i, max.i + max.length);
	delete max.i;
	return max;
}

console.log('getLongestPrimeSumTo(100)', getLongestPrimeSumTo(100));
console.log('getLongestPrimeSumTo(1000000)', getLongestPrimeSumTo(1000000));
