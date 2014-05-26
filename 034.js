var digitFactorials = [0,1,2,3,4,5,6,7,8,9].map(Utils.getFactorial);

console.log('digitFactorials', digitFactorials);

function getDigitFactorial(digit) {
	return digitFactorials[digit];
}

function sumOfFactorialsOfDigits(n) {
	return Utils.sumArray(Utils.getDigits(n).map(getDigitFactorial));
}

console.log('sumOfFactorialsOfDigits(145)', sumOfFactorialsOfDigits(145));
console.log('sumOfFactorialsOfDigits(40585)', sumOfFactorialsOfDigits(40585));

function calcMaxN() {
	var n = 9;
	while (sumOfFactorialsOfDigits(n) >= n) {
		n = n * 10 + 9;
	}
	return n;
}

console.log('calcMaxN()', calcMaxN());

var results = [];
for (var n = 3, maxN = calcMaxN(); n < maxN; ++n) {
	if (sumOfFactorialsOfDigits(n) == n) {
		results.push(n);
	}
}

console.log('results', results);
console.log('sum', Utils.sumArray(results));
