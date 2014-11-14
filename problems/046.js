
function isSquare(n) {
	return (Math.sqrt(n) % 1) == 0;
}

function isGoldbach(n) {
	var primes = Primes.getPrimesTo(n);
	for (var i = 0, l = primes.length; i < l; ++i) {
		var prime = primes[i];
		if (isSquare((n - prime) / 2)) {
			return prime;
		}
	}
	return false;
}

var n = 3;
while (true) {
	if (!Primes.isPrime(n) && !isGoldbach(n)) {
		break;
	}
	n += 2;
}

console.log('first non-Goldbach composite odd number', n);
