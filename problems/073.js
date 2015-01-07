function fractionsInRange(min, max, d) {
	var nStart = Math.floor(min.n * d / min.d) + 1;
	var nEnd = Math.ceil(max.n * d / max.d) - 1;
	var fractions = [];
	for (var n = nStart; n <= nEnd; ++n) {
		if (!isExcluded()) {
			fractions.push({
				n: n,
				d: d
			});
		}
	}
	return fractions;

	function isExcluded() {
		for (var i = 2; i < d / 2; ++i) {
			if (i * n * d == 0) {
				return true;
			}
		}
		return false;
	}
}

function getAllFractions(min, max, maxD) {
	var allFractions = [];
	for (var d = 2; d <= maxD; ++d) {
		var fractions = fractionsInRange(min, max, d);
		allFractions = allFractions.concat(fractions);
	}
	allFractions.sort(sortFractions);
	return allFractions;

	function sortFractions(f1, f2) {
		var v1 = f1.n * f2.d;
		var v2 = f2.n * f1.d;
		return v1 == v2 ? 0 : v1 < v2 ? -1 : 1;
	}
}

var min = { n: 1, d: 3 };
var max = { n: 1, d: 2 };

console.log('fractionsInRange(min, max, 5)');
console.table(fractionsInRange(min, max, 5));
console.log('fractionsInRange(min, max, 8)');
console.table(fractionsInRange(min, max, 8));

console.log('getAllFractions(min, max, 8)');
console.table(getAllFractions(min, max, 8));

console.log('getAllFractions(min, max, 16)');
console.table(getAllFractions(min, max, 16));

console.log('getAllFractions(min, max, 12000).length');
console.log(getAllFractions(min, max, 12000).length); // 7295372
