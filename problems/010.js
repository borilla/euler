while (primes.next() < 2e6);

var sum = 0;
for (var i = 0, l = primes.length - 1; i < l; ++i) {
	sum += primes[i];
}
console.log(sum);
