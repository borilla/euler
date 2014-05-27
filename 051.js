
function possibleFamilyMember(str1, str2) {
	var len = str1.length;
	if (str1 == str2 || str2.length != len) {
		return false;
	}
	var pattern = '';
	var d1, d2;
	for (var i = 0; i < len; ++i) {
		var s1 = str1[i];
		var s2 = str2[i];
		if (s1 == s2) {
			pattern += s1;
		}
		else {
			if (d1) {
				if (s1 != d1 || s2 != d2) {
					return false;
				}
			}
			else {
				d1 = s1;
				d2 = s2;
			}
			pattern += '*';
		}
	}
	return pattern;
}

console.log(possibleFamilyMember('johnny', 'johXXy'));
console.log(possibleFamilyMember('johnny', 'johXYy'));

function allXDigitPrimes(x) {
	var max = Math.pow(10, x);
	var min = Math.pow(10, x - 1);
	var primes = Primes.getPrimesTo(max);
	return primes.filter(function(prime) {
		return prime > min;
	}).map(function(prime) {
		return prime.toString();
	});
}

var primes = allXDigitPrimes(5);
console.log('count of five digit primes', primes.length);

var t1 = Date.now();

var max = { matches: 0 };
primes.forEach(function(prime) {
	var primeResults = {};
	var primeMax = { matches: 0 };
	primes.forEach(function(other) {
		var pattern = possibleFamilyMember(prime, other)
		if (pattern !== false) {
			var matches = primeResults[pattern];
			matches = matches ? matches + 1 : 1;
			primeResults[pattern] = matches;
			if (matches > primeMax.matches) {
				primeMax = {
					pattern: pattern,
					matches: matches
				}
			}
		}
	});
	if (primeMax.matches > max.matches) {
		max = primeMax;
		max.prime = prime;
	}
});


var t2 = Date.now();

console.log('max', max);
console.log('time', t2 - t1);
