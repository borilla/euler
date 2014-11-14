var target = 500;

var t1 = Date.now();

var n = 0;
var triangle = 0;
var count;
do {
	n += 1;
	triangle = triangle + n;
	count = Primes.countFactors(triangle);
} while (count < target);

var t2 = Date.now();

// triangle = 76576500;

console.log('time: ' + (t2 - t1) + 'ms');
console.log('triangle number: ' + triangle);
console.log('count of factors: ' + count);
console.log('prime factors:', Primes.getPrimeFactors(triangle));
console.log('all factors:', Primes.getAllFactors(triangle));
