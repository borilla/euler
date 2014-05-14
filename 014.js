function collatz(n) {
	return (n & 1) ? 3 * n + 1 : n / 2;
}

function sequenceLength(n) {
	var length = 0;
	while (n != 1) {
		n = collatz(n);
		++length;
	}
	return length;
}

var maxValue, maxLength = 0;
for (var n = 1; n < 1000000; ++n) {
	var length = sequenceLength(n);
	if (length > maxLength) {
		maxLength = length;
		maxValue = n;
	}
}

console.log('value', maxValue);
console.log('length', maxLength);
