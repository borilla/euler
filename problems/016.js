function sumDigits(n) {
	var digits = n.toString().split('');
	return digits.reduce(function(total, digit) {
		return +digit + total;
	}, 0);
}

var big = new BigNum('12345');

console.log('sumDigits(12345) = ' + sumDigits(12345));
console.log('sumDigits("12345") = ' + sumDigits('12345'));
console.log("sumDigits(big) = " + sumDigits(big));

function powerOf2(pow) {
	if (pow == 0) {
		return new BigNum(1);
	}
	// else
	var n = new BigNum(2);
	while (--pow) {
		n.add(n);
	}
	return n;
}

console.log('powerOf2(0) = ' + powerOf2(0));
console.log('powerOf2(1) = ' + powerOf2(1));
console.log('powerOf2(2) = ' + powerOf2(2));
console.log('powerOf2(3) = ' + powerOf2(3));
console.log('powerOf2(1000) = ' + powerOf2(1000));

console.log('sumDigits(powerOf2(1000)) = ' + sumDigits(powerOf2(1000)));
