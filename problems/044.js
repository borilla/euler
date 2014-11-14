var Pentagonals = (function() {
	var arr = [];
	var obj = {};
	var max = 0;
	var n = 0;

	function calcNext() {
		n += 1;
		max = arr[n] = (3 * n * n - n) / 2;
		obj[max] = true;
	}

	function getPentagonal(m) {
		while (n < m) {
			calcNext();
		}
		return arr[m];
	}

	function isPentagonal(n) {
		while (max < n) {
			calcNext();
		}
		return !!obj[n];
	}

	return {
		getPentagonal: getPentagonal,
		isPentagonal: isPentagonal
	};
}());

console.log('Pentagonals.getPentagonal(1)', Pentagonals.getPentagonal(1));
console.log('Pentagonals.getPentagonal(2)', Pentagonals.getPentagonal(2));
console.log('Pentagonals.getPentagonal(3)', Pentagonals.getPentagonal(3));
console.log('Pentagonals.getPentagonal(4)', Pentagonals.getPentagonal(4));

console.log('Pentagonals.isPentagonal(12)', Pentagonals.isPentagonal(12));
console.log('Pentagonals.isPentagonal(35)', Pentagonals.isPentagonal(35));
console.log('Pentagonals.isPentagonal(51)', Pentagonals.isPentagonal(51));
console.log('Pentagonals.isPentagonal(117)', Pentagonals.isPentagonal(117));

var i = 2;
var found = false;
while (!found) {
	var p1 = Pentagonals.getPentagonal(i);
	for (var j = 1; j < i; ++j) {
		var p2 = Pentagonals.getPentagonal(j);
		var sum = p1 + p2;
		var diff = p1 - p2;
		if (Pentagonals.isPentagonal(sum) && Pentagonals.isPentagonal(diff)) {
			found = true;
			break;
		}
	}
	i += 1;
}

console.log('pentagonals', p1, p2);
console.log('diff', diff, 'sum', sum);
