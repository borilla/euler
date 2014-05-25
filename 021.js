var sums = [];

for (var n = 2; n < 10000; ++n) {
	var factors = Primes.getAllFactors(n);
	var sum = factors.reduce(function(sum, factor) {
		return (factor == n) ? sum : sum + factor;
	}, 0);
	sums[n] = sum;
}

var amicables = [];
var amicableSum = 0;

for (var a = 2; a < 10000; ++a) {
	var b = sums[a];
	if (a < b && sums[b] == a) {
		amicables.push([a, b]);
		amicableSum += a + b;
	}
}

console.log(amicables);
console.log('amicableSum = ' + amicableSum);
