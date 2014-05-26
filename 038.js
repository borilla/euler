
function removeDigits(digits, num) {
	num = num.toString();
	for (var i = 0, l = num.length; i < l; ++i) {
		var char = num[i];
		var j = digits.indexOf(char);
		if (j == -1) {
			return false;
		}
		digits = digits.replace(char, '');
	}
	return digits;
}

function isPandigitalMultiple(num) {
	var n = 0;
	var digits = '123456789';
	var pandigital = '';
	while (true) {
		n += 1;
		digits = removeDigits(digits, num * n);
		if (digits === false) {
			return false
		}
		pandigital += num * n;
		if (digits.length == 0) {
			return n == 1 ? false : +pandigital;
		}
	}
}

var pandigitals = [];
for (var n = 1; n < 1000000; ++n) {
	var result = isPandigitalMultiple(n);
	if (result) {
		pandigitals.push({
			n: n,
			pandigital: result
		});
		console.log(n, result);
	}
}
console.log(pandigitals);
