function getDigits(n) {
	return n.toString().split('').map(function(digit) {
		return +digit;
	});
	
}

console.log('getDigits(1634):', getDigits(1634));
console.log('getDigits(8208):', getDigits(8208));
console.log('getDigits(9474):', getDigits(9474));

function nthPower(number, power) {
	var digits = getDigits(number);
	var sum = digits.reduce(function(total, digit) {
		return total + Math.pow(digit, power);
	}, 0);
	return sum;
}

console.log('nthPower(1634, 4):', nthPower(1634, 4));
console.log('nthPower(8208, 4):', nthPower(8208, 4));
console.log('nthPower(9474, 4):', nthPower(9474, 4));

var fifthPowers = [];
for (var n = 2; n < 1000000; ++n) {
	if (nthPower(n, 5) == n) {
		fifthPowers.push(n);
	}
}

var fifthPowersSum = fifthPowers.reduce(function(a, b) {
	return a + b;
}, 0);

console.log('fifth power results:', fifthPowers);
console.log('sum:', fifthPowersSum);
