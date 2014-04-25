function isPalindrome(x) {
	str = '' + x;
	for (var i = 0, l = str.length; i < l / 2; ++i) {
		if (str[i] != str[l - i - 1]) {
			return false;
		}
	}
	return true;
}

function countDigits(x) {
	var str = '' + x;
	return str.length;
}

function sixDigitPalindromes() {
	var palindromes = [];
	for (var x = 999999; x > 100000; --x) {
		if (isPalindrome(x)) {
			palindromes.push(x);
		}
	}
	return palindromes;
}

function threeDigitfactors(n) {
	var factorSets = [];
	for (var i = 999; i > 99; --i) {
		if (n % i == 0) {
			var j = n / i;
			if (i >= j && countDigits(j) == 3) {
				factorSets.push([
					i, j
				]);
			}
		}
	}
	return factorSets;
}

var palindromes = sixDigitPalindromes();
for (var i = 0, l = palindromes.length; i < l; ++i) {
	var palindrome = palindromes[i];
	var factors = threeDigitfactors(palindrome);
	if (factors.length) {
		console.log(palindrome, factors);
		break;
	}
}
