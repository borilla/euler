var Utils = (function() {
	function getFactorial(n) {
		var f = 1;
		for (i = 2; i <= n; ++i) {
			f *= i;
		}
		return f;
	}

	function sumArray(arr) {
		return arr.reduce(function(a, b) {
			return a + b;
		}, 0);
	}

	function getDigits(n) {
		return n.toString().split('').map(function(digit) {
			return +digit;
		});
	}

	function isOdd(n) {
		return n & 1;
	}

	function isEven(n) {
		return n & 1 ^ 1;
	}

	return {
		getDigits: getDigits,
		getFactorial: getFactorial,
		isEven: isEven,
		isOdd: isOdd,
		sumArray: sumArray
	};
}());
