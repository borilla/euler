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
		return !(n & 1);
	}

	function isOdd(n) {
		return n & 1;
	}

	function getPermutation(n, digits) {
		function getFactorials(n) {
			var memo = getPermutation.memo;
			var m = memo[n];
			if (!m) {
				var f = 1;
				var fs = [];
				for (var i = 1; i <= digits.length; ++i) {
					fs.push(f *= i);
				}
				m = memo[n] = fs.reverse();
			}
			return m;
		}
		getFactorials.memo = {};

		digits = digits.split('');
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
		return result.join('');
	}
	getPermutation.memo = {};

	return {
		arrayProduct: arrayProduct,
		arraySum: arraySum,
		commonFactor: commonFactor,
		getDigits: getDigits,
		getFactorial: getFactorial,
		getPermutation: getPermutation,
		isEven: isEven,
		isOdd: isOdd
	};
}());
