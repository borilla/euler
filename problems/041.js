

function getDigitsStr(digits) {
	var str = '';
	for (var digit = digits; digit > 0; --digit) {
		str += digit;
	}
	return str;
}

var digits = '987654321';
var n = 0;
var permutationStr;
var permutationNum;

for (var digits = 9; digits > 0; --digits) {
	var digitsStr = getDigitsStr(digits);
	var permutations = Utils.getFactorial(digits);
	console.log(digits + ' digits', digitsStr, permutations + ' permutations');
	for (var p = 0; p < permutations; ++p) {
		var permutationStr = Utils.getPermutation(p, digitsStr);
		var permutationNum = +permutationStr;
		if (Primes.isPrime(permutationNum)) {
			console.log(digits + ' digit prime', permutationNum);
		}
	}
}

console.log('complete!');
