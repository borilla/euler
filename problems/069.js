function relativePrimes(n) {
	var relPrimes = [1];
	var relFactors = [];
	for (var x = 2; x < n; ++x) {
		if (isRelativePrime(x)) {
			relPrimes.push(x);
		}
	}
	return relPrimes;

	function isRelativePrime(x) {
		if (n % x == 0) {
			relFactors.push(x);
			return false;
		}
		for (var i = 0, l = relFactors.length; i < l; ++i) {
			if (x % relFactors[i] == 0) {
				return false;
			}
		}
		return true;
	}
}

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

function totientMaximum(to) {
	var max = {
		n: 1,
		val: 1
	};
	for (var n = 2; n <= to; ++n) {
		var val = n / totient(n);
		if (val > max.val) {
			max.n = n;
			max.val = val;
		}
	}
	return max;
}

var results = [];
for (var n = 2; n <= 30; ++n) {
	results.push({
		n: n,
		'relative primes': relativePrimes(n).join(','),
		totient: totient(n),
		'n / phi': n / totient(n)
	});
}
console.table(results);
console.log('totientMaximum(10)', totientMaximum(10));
console.log('totientMaximum(1000)', totientMaximum(1000));
console.log('totientMaximum(1000000)', totientMaximum(1000000));
