
function removeDigits(digits, num) {
	num = num.toString();
	for (var i = 0, l = num.length; i < l; ++i) {
		var char = num[i];
		var j = digits.indexOf(char);
		if (j == -1) {
			return false;
		}
		digits = digits.replace(char, '');
	}
	return digits;
}

function hasTwoDivisors(n, digits) {
	var factors = Primes.getAllFactors(n);
	for (var i = 0, l = factors.length; i < l; ++i) {
		var factor = factors[i];
		var remainingDigits = removeDigits(digits, factor);
		if (remainingDigits !== false) {
			var other = n / factor;
			remainingDigits = removeDigits(remainingDigits, other);
			if (remainingDigits === '') {
				console.log(n, factor, other);
				return true;
			}
		}
	}
	return false;
}

var results = [];
for (var n = 1000; n < 10000; ++n) {
	var remainingDigits = removeDigits('123456789', n);
	if (remainingDigits !== false) {
		if (hasTwoDivisors(n, remainingDigits)) {
			results.push(n);
		}
	}
}

console.log('results', results);
console.log('sum', Utils.arraySum(results));
