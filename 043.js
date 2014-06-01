var digits = '0123456789';
var countPermutations = Utils.getFactorial(digits.length);

console.log(digits.length + ' digits, ' + countPermutations + ' permutations');

function isSubStringDivisible(permutation) {
	var primes = [2,3,5,7,11,13,17];
	for (var i = 6; i >= 0; --i) {
		var n = parseInt(permutation.slice(i + 1, i + 4), 10);
		if ((n % primes[i]) != 0) {
			return false;
		}
	}
	return true;
}

console.log("isSubStringDivisible('1406357289')", isSubStringDivisible('1406357289'));

var results = [];
for (var p = 0; p < countPermutations; ++p) {
	var permutation = Utils.getPermutation(p, digits);
	if (isSubStringDivisible(permutation)) {
		results.push(parseInt(permutation, 10));
	}
}

console.log('results', results);
console.log('Utils.arraySum(results)', Utils.arraySum(results));
