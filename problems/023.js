function properDivisors(n) {
	var factors = Primes.getAllFactors(n);
	return factors.slice(0, factors.length - 1);
}

console.log('properDivisors(28)', properDivisors(28));

function sum(arr) {
	return arr.reduce(function(a, b) {
		return a + b;
	}, 0);
}

console.log('sum(properDivisors(28))', sum(properDivisors(28)));

function isAbundant(n) {
	return sum(properDivisors(n)) > n;
}

console.log('isAbundant(11)', isAbundant(11));
console.log('isAbundant(12)', isAbundant(12));
console.log('isAbundant(13)', isAbundant(13));

function abundantNumbersTo(n) {
	var abundants = [];
	for (var i = 1; i <= n; ++i) {
		if (isAbundant(i)) {
			abundants.push(i);
		}
	}
	return abundants;
}

var limit = 40000;
var abundants = abundantNumbersTo(limit);
console.log('count of abundants to ' + limit + ':', abundants.length);
console.log('abundants to ' + limit + ':', abundants);

function sumsOfAbundantsUpToLimit(abundants, limit) {
	var sums = {};
	var length = abundants.length;
	for (var i = 0; i < length; ++i) {
		abundant1 = abundants[i];
		for (var j = 0; j < length; ++j) {
			abundant2 = abundants[j];
			var sum = abundant1 + abundant2;
			if (sum < limit) {
				sums[sum] = sum;
			}
		}
	}
	return sums;
}

function countKeys(obj) {
	return Object.keys(obj).length;
}

var pairs = sumsOfAbundantsUpToLimit(abundants, limit);
console.log('sums of pairs of abundants:', pairs);
console.log('count of sums of pairs of abundants:', countKeys(pairs));

var count= 0;
var sum = 0;
for (var i = 1; i < limit; ++i) {
	if (!pairs[i]) {
		++count;
		sum += i;
	}
}

console.log('numbers which are not sum of abundants:', count);
console.log('sum of numbers which are not sum of abundants:', sum);
