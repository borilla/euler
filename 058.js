var sideLength = 1;
var totalCorners = 1;
var primeCorners = 0;
var percentagePrimes = 100;

function report(precision) {
	console.log('sideLength', sideLength, 'percentagePrimes', percentagePrimes.toFixed(precision));
}

while (percentagePrimes >= 10 && sideLength < 100000) {
	sideLength += 2;
	var c3 = sideLength * sideLength;
	var c2 = c3 - sideLength + 1;
	var c1 = c2 - sideLength + 1;
	var c0 = c1 - sideLength + 1;
	totalCorners += 4;
	if (Primes.isPrime(c3)) {
		++primeCorners;
	}
	if (Primes.isPrime(c2)) {
		++primeCorners;
	}
	if (Primes.isPrime(c1)) {
		++primeCorners;
	}
	if (Primes.isPrime(c0)) {
		++primeCorners;
	}
	percentagePrimes = primeCorners / totalCorners * 100;
	if (sideLength < 10 || sideLength % 1000 == 1) {
		report(2);
	}
}

report(5);
