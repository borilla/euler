var Utils = (function() {
	function arrayProduct(arr) {
		return arr.reduce(function(a, b) {
			return a * b;
		}, 1);
	}

	function arraySum(arr) {
		return arr.reduce(function(a, b) {
			return +a + +b;
		}, 0);
	}

	function getDigits(n) {
		return n.toString().split('').map(function(digit) {
			return +digit;
		});
	}

	function getFactorial(n) {
		var memo = getFactorial.memo;
		var value = memo[n];
		if (!value) {
			var length = memo.length;
			value = memo[length - 1];
			while (length <= n) {
				value *= length;
				memo[length] = value;
				length++;
			}
		}
		return value;
	}
	getFactorial.memo = [1];

	function commonFactor(n1, n2) {
		if (n1 == 1 || n2 == 1) {
			return 1;
		}
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

	function getPermutation(n, obj) {
		var fn = (typeof obj == 'string') ? getPermutationString : getPermutationArray;
		return fn(n, obj);
	}

	function getPermutationString(n, str) {
		var array = str.split('');
		var result = _getPermutation(n, array);
		return result.join('');
	}

	function getPermutationArray(n, arr) {
		var clone = arr.slice();
		return _getPermutation(n, clone);
	}

	/**
	 * Helper for getPermutation..() functions. Modifies supplied array!
	 */
	function _getPermutation(n, arr) {
		var result = [];
		var length = arr.length;
		n %= getFactorial(length);
		for (var i = length - 1; i; --i) {
			var f = getFactorial.memo[i];
			var j = Math.floor(n / f);
			n %= f;
			result.push(arr[j]);
			arr.splice(j, 1);
		}
		result.push(arr[0]);
		return result;
	}

	function getCombinations(arr) {
		var item = arr[0];
		var remainder = arr.slice(1);
		var combinations = remainder.length ? getCombinations(remainder) : [];
		for (var i = 0, l = combinations.length; i < l; ++i) {
			var clone = combinations[i].concat(item);
			combinations.push(clone);
		}
		combinations.push([item]);
		return combinations;
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

	function getCommonItems(array1, array2) {
		var args = argsToArray(arguments).sort(_sortByLength);
		return args.reduce(_getCommonItems);

		function _sortByLength(a, b) {
			var al = a.length;
			var bl = b.length;
			return al < bl ? -1 : al == bl ? 0 : 1;
		}

		function _getCommonItems(array1, array2) {
			var length = array1.length;
			var results = [];
			for (var i = 0; i < length; ++i) {
				var item = array1[i];
				if (array2.indexOf(item) != -1) {
					results.push(item);
				}
			}
			return results;
		}
	}

	function getAsciiSum(str) {
		var sum = 0;
		for (var i = 0, l = str.length; i < l; ++i) {
			var code = str.charCodeAt(i);
			sum += code;
		}
		return sum;
	}

	function getPolygonal(x, n) {
		return n * ((x - 2) * n + 4 - x) / 2;
	}

	function sumDigits(str) {
		return arraySum(getDigits(str));
	}

	function argsToArray(args, start) {
		start = start || 0;
		var length = args.length;
		var size = length - start;
		if (size <= 0) {
			return [];
		}
		// else
		var array = Array(size);
		for (var i = start, j = 0; i < length; ++i, ++j) {
			array[j] = args[i];
		}
		return array;
	}

	function concatArrays(array1, array2) {
		var l1 = array1.length;
		var l2 = array2.length;
		var result = Array(l1 + l2);
		for (var i = 0; i < l1; ++i) {
			result[i] = array1[i];
		}
		for (var j = 0; j < l2; ++j, ++i) {
			result[i] = array2[j];
		}
		return result;
	}

	var isArray = Array.isArray;

	return {
		arrayProduct: arrayProduct,
		arraySum: arraySum,
		commonFactor: commonFactor,
		concatArrays: concatArrays,
		sumDigits: sumDigits,
		getAsciiSum: getAsciiSum,
		getCommonItems: getCommonItems,
		getCombinations: getCombinations,
		getDigits: getDigits,
		getFactorial: getFactorial,
		getPermutation: getPermutation,
		isEven: isEven,
		isOdd: isOdd,
		isPalindrome: isPalindrome,
		isPermutationOf: isPermutationOf,
		getPolygonal: getPolygonal,
		reverse: reverse
	};
}());
