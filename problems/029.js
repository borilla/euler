function uniqueTerms(range) {

	function unique(arr) {
		arr.sort();
		var result = [];
		for (var i = 0, l = arr.length; i < l; ++i) {
			if (arr[i] !== arr[i - 1]) {
				result.push(arr[i]);
			}
		}
		return result;
	}

	var terms = [];

	for (var a = 2; a <= range; ++a) {
		var big = new BigNum(a);
		for (var b = 2; b <= range; ++b) {
			big.mul(a);
			terms.push(big.str);
		}
	}

	terms = unique(terms);
	return terms;
}

var terms5 = uniqueTerms(5);
console.log(terms5, terms5.length);

var terms100 = uniqueTerms(100);
console.log(terms100, terms100.length);
