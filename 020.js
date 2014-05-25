function factorial(n) {
	var f = new BigNum(1);
	while (n > 0) {
		f.mul(n);
		n -= 1;
	}
	return f;
}

function sumDigits(n) {
	var digits = n.toString().split('');
	return digits.reduce(function(total, digit) {
		return +digit + total;
	}, 0);
}

console.log('factorial(10) = ' + factorial(10));
console.log('factorial(100) = ' + factorial(100));
console.log('sumDigits(factorial(10)) = ' + sumDigits(factorial(10)));
console.log('sumDigits(factorial(100)) = ' + sumDigits(factorial(100)));
