function multipleOfThreeOrFive(n) {
	if (n % 3 == 0) {
		return true;
	}
	if (n % 5 == 0) {
		return true;
	}
	return false;
}

var sum = 0;
for (var i = 1; i < 1000; ++i) {
	if (multipleOfThreeOrFive(i)) {
		sum += i;
	}
}
console.log('sum: ', sum);
