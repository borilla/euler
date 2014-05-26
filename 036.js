function isPalindrome(str) {
	var length = str.length;
	for (var i = 0, j = length - 1, l = length >> 1; i < l; ++i, --j) {
		if (str[i] != str[j]) {
			return false;
		}
	}
	return true;
}

function isDecimalPalindrome(n) {
	return isPalindrome(n.toString(10));
}

function isBinaryPalindrome(n) {
	return isPalindrome(n.toString(2));
}

console.log('isDecimalPalindrome(1)', isDecimalPalindrome(1));
console.log('isDecimalPalindrome(585)', isDecimalPalindrome(585));
console.log('isDecimalPalindrome(586)', isDecimalPalindrome(586));

console.log('isBinaryPalindrome(1)', isBinaryPalindrome(1));
console.log('isBinaryPalindrome(585)', isBinaryPalindrome(585));
console.log('isBinaryPalindrome(586)', isBinaryPalindrome(586));

function getDualPalindromesTo(max) {
	var results = [];
	for (var n = 0; n < max; ++n) {
		if (isDecimalPalindrome(n) && isBinaryPalindrome(n)) {
			results.push(n);
		}
	}
	return results;
}

var palindromes = getDualPalindromesTo(1000000);
console.log('palindromes', palindromes);
console.log('sum', Utils.arraySum(palindromes));
