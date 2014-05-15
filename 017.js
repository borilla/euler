var unitsText = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tensText = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numberInWords(n) {
	if (n < 0) {
		return 'minus ' + numberInWords(-n);
	}

	if (n < 20) {
		return unitsText[n];
	}

	if (n < 100) {
		var tens = Math.floor(n / 10);
		var remainder = n % 10;
		var str = tensText[tens - 2];
		if (remainder) {
			str += ' ' + unitsText[remainder];
		}
		return str;
	}

	if (n < 1000) {
		var hundreds = Math.floor(n / 100);
		var remainder = n % 100;
		var str = unitsText[hundreds] + ' hundred';
		if (remainder) {
			str += ' and ' + numberInWords(remainder);
		}
		return str;
	}

	var thousands = Math.floor(n / 1000);
	var remainder = n % 1000;
	var str = numberInWords(thousands) + ' thousand';
	if (remainder) {
		if (remainder < 100) {
			str += ' and ' + numberInWords(remainder);
		}
		else {
			str += ', ' + numberInWords(remainder);
		}
	}
	return str;
}

function countLetters(str) {
	var letters = str.replace(/[^a-z]/gi, '');
	return letters.length;
}

function logNumberInWords(n) {
	var words = numberInWords(n);
	var letters = countLetters(words);
	console.log(n, words, letters);
}

logNumberInWords(0);
logNumberInWords(1);
logNumberInWords(12);
logNumberInWords(20);
logNumberInWords(25);
logNumberInWords(99);
logNumberInWords(100);
logNumberInWords(101);
logNumberInWords(110);
logNumberInWords(150);
logNumberInWords(999);
logNumberInWords(1000);
logNumberInWords(1005);
logNumberInWords(1019);
logNumberInWords(1020);
logNumberInWords(1990);
logNumberInWords(1999);
logNumberInWords(-1999);

function numberLetterCount(n) {
	var count = 0;
	for (var i = 1; i <= n; ++i) {
		var words = numberInWords(i);
		count += countLetters(words);
	}
	console.log('numberLetterCount(' + n + ') = ' + count);
	return count;
}

numberLetterCount(5);
numberLetterCount(1000);
