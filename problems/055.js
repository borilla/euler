
console.log("Utils.isPalindrome('abca')", Utils.isPalindrome('abca'));
console.log("Utils.isPalindrome('abcba')", Utils.isPalindrome('abcba'));
console.log("Utils.isPalindrome(12345)", Utils.isPalindrome(12345));
console.log("Utils.isPalindrome(123321)", Utils.isPalindrome(123321));
console.log("Utils.isPalindrome(1234321)", Utils.isPalindrome(1234321));

console.log("Utils.reverse('john')", Utils.reverse('john'));
console.log("Utils.reverse('12345')", Utils.reverse('12345'));

function addToReverse(n) {
	var r = Utils.reverse(n);
	var m = parseInt(r, 10);
	return n + m;
}

console.log('addToReverse(47)', addToReverse(47));
console.log('addToReverse(10)', addToReverse(10));
console.log('addToReverse(120)', addToReverse(120));

function isLychrel(num, maxIterations) {
	maxIterations = maxIterations || 50;
	var iter = 0;
	var n = num;
	while (iter < maxIterations) {
		n = addToReverse(n);
		if (Utils.isPalindrome(n)) {
			return false;
		}
		iter += 1;
	}
	return true;
}

console.log('isLychrel(47)', isLychrel(47));
console.log('isLychrel(4994)', isLychrel(4994));
console.log('isLychrel(349, 2)', isLychrel(349, 2));
console.log('isLychrel(349, 3)', isLychrel(349, 3));

var count = 0;
for (var n = 0; n < 10000; ++n) {
	if (isLychrel(n)) {
		++count;
	}
}

console.log('there are ' + count + ' Lychrel numbers below 10000');
