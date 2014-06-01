
function getPrimePermutations(n) {
	var s = n.toString();
	var permutations = Utils.getFactorial(s.length);
	var results = [];
	var dupes = getPrimePermutations.dupes;
	for (var n = 0; n < permutations; ++n) {
		var p = Utils.getPermutation(n, s);
		if (!dupes[p]) {
			if (Primes.isPrime(+p)) {
				results.push(p);
				dupes[p] = p;
			}
		}
	}
	return results.sort();
}

getPrimePermutations.dupes = {};

function findMatchingDifferences(strings) {
	var numbers = strings.map(function(str) {
		return +str;
	});
	var l = numbers.length;
	for (var i = 0; i < l - 1; ++i) {
		var n1 = numbers[i];
		for (var j = i + 1; j < l; ++j) {
			var n2 = numbers[j];
			var n3 = n2 + n2 - n1;
			var k = numbers.indexOf(n3);
			if (k != -1) {
				return [
					strings[i],
					strings[j],
					strings[k]
				];
			}
		}
	}
}

var results = [];
var n = 1000;
while (n < 10000) {
	var p = getPrimePermutations(n);
	if (p.length > 2) {
		var f = findMatchingDifferences(p);
		if (f) {
			results.push(f);
		}
	}
	++n;
}

console.log('results', results);

// 296962999629
