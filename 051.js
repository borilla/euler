
function possibleFamilyMember(str1, str2) {
	var pattern = '';
	var d1, d2;
	for (var i = 0, l = str1.length; i < l; ++i) {
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

var t1 = Date.now();

console.log('count of six digit primes', allXDigitPrimes(6).length);
console.log('count of seven digit primes', allXDigitPrimes(7).length);

var t2 = Date.now();

var primes = allXDigitPrimes(6);

var max = { matches: 0 };
var l = primes.length;
for (var i = 0; i < l - 1; ++i) {
	var prime = primes[i];
	var primeResults = {};
	var primeMax = { matches: 0 };
	for (var j = i + 1; j < l; ++j) {
		var other = primes[j];
		var pattern = possibleFamilyMember(prime, other)
		if (pattern !== false) {
			var matches = primeResults[pattern];
			matches = matches ? matches + 1 : 2;
			primeResults[pattern] = matches;
			if (matches > primeMax.matches) {
				primeMax = {
					pattern: pattern,
					matches: matches
				}
			}
		}
	}
	if (primeMax.matches > max.matches) {
		max = primeMax;
		max.prime = prime;
	}
}

var t3 = Date.now();

console.log('max', max);
console.log('time to calculate primes', t2 - t1);
console.log('time to calculate patterns', t3 - t2);
