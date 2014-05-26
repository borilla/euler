function getFactorials(n) {
	var f = 1;
	var fs = [];
	for (var i = 1; i <= digits.length; ++i) {
		fs.push(f *= i);
	}
	return fs.reverse();
}

function permutation(n, digits) {
	digits = digits.slice();
	var result = [];
	var length = digits.length;
	var factorials = getFactorials(length);
	n %= factorials[0];
	for (var i = 0; i < length - 1; ++i) {
		var f = factorials[i + 1];
		var j = Math.floor(n / f);
		n %= f;
		result.push(digits[j]);
		digits.splice(j, 1);
	}
	result.push(digits[0]);
	return result;
}

var digits = [0,1,2,3,4,5,6,7,8,9];
console.log('permutation(999999, digits):', permutation(999999, digits).join(''));
