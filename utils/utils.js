var Utils = (function() {
	function arrayProduct(arr) {
		return arr.reduce(function(a, b) {
			return a * b;
		}, 1);
	}

	function arraySum(arr) {
		return arr.reduce(function(a, b) {
			return a + b;
		}, 0);
	}

	function getDigits(n) {
		return n.toString().split('').map(function(digit) {
			return +digit;
		});
	}

	function getFactorial(n) {
		var f = 1;
		for (i = 2; i <= n; ++i) {
			f *= i;
		}
		return f;
	}

	function commonFactor(n1, n2) {
		var f1 = Primes.getAllFactors(n1);
		var f2 = Primes.getAllFactors(n2);
		for (var i = f1.length - 1; i; --i) {
			var factor = f1[i];
			if (f2.indexOf(factor) != -1) {
				return factor;
			}
		}
		return 1;
	}

	function isEven(n) {
		return n & 1 ^ 1;
	}

	function isOdd(n) {
		return n & 1;
	}

	return {
		arrayProduct: arrayProduct,
		arraySum: arraySum,
		commonFactor: commonFactor,
		getDigits: getDigits,
		getFactorial: getFactorial,
		isEven: isEven,
		isOdd: isOdd
	};
}());
