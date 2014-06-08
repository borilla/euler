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

	/**
	 * helper for getPermutation()
	 */
	function getFactorials(n) {
		var memo = getFactorials.memo;
		var m = memo[n];
		if (!m) {
			var f = 1;
			var fs = [];
			for (var i = 1; i <= n; ++i) {
				fs.push(f *= i);
			}
			m = memo[n] = fs.reverse();
		}
		return m;
	}
	getFactorials.memo = {};

	function getPermutation(n, digits) {
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

	function isPermutationOf(str1, str2) {
		var length = str1.length;
		if (str2.length != length) {
			return false;
		}
		for (var i = length - 1; i >= 0; --i) {
			str2 = str2.replace(str1[i], '');
			if (str2.length != i) {
				return false;
			}
		}
		return true;
	}

	function reverse(str) {
		str = str.toString();
		return str.split('').reverse().join('');
	}

	function isPalindrome(str) {
		str = str.toString();
		var length = str.length;
		var half = length >> 1;
		var m = length - 1;
		for (var i = 0; i < half; ++i) {
			if (str[i] != str[m - i]) {
				return false;
			}
		}
		return true;
	}

	return {
		arrayProduct: arrayProduct,
		arraySum: arraySum,
		commonFactor: commonFactor,
		getDigits: getDigits,
		getFactorial: getFactorial,
		getPermutation: getPermutation,
		isEven: isEven,
		isOdd: isOdd,
		isPalindrome: isPalindrome,
		isPermutationOf: isPermutationOf,
		reverse: reverse
	};
}());
