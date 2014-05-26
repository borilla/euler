
function allRotationsArePrime(num) {
	var str = num.toString();
	for (var i = 1, l = str.length; i < l; ++i) {
		str = str.slice(1) + str[0];
		if (!Primes.isPrime(+str)) {
			return false;
		}
	}
	return true;
}

console.log('allRotationsArePrime(197)', allRotationsArePrime(197));

function getCircularPrimesTo(n) {
	var primes = Primes.getPrimesTo(n);
	return primes.filter(allRotationsArePrime);
}

console.log('getCircularPrimesTo(100)', getCircularPrimesTo(100));

var circularPrimes = getCircularPrimesTo(1000000);
console.log('circular primes to 1000000', circularPrimes);
console.log('count', circularPrimes.length);
