
function rotateString(str) {
	return str.slice(1) + str[0];
}

console.log("rotateString('john')", rotateString('john'));

function getAllRotations(num) {
	var rotations = [num];
	var str = num.toString();
	for (var i = 1, l = str.length; i < l; ++i) {
		str = rotateString(str);
		rotations.push(+str);
	}
	return rotations;
}

console.log('getAllRotations(197)', getAllRotations(197));

function areAllPrime(nums) {
	return nums.every(Primes.isPrime);
}

console.log('areAllPrime(getAllRotations(17))', areAllPrime(getAllRotations(17)));
console.log('areAllPrime(getAllRotations(23))', areAllPrime(getAllRotations(23)));
console.log('areAllPrime(getAllRotations(197))', areAllPrime(getAllRotations(197)));

function allRotationsArePrime(n) {
	return areAllPrime(getAllRotations(n));
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
