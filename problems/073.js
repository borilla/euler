function countFractions(min, max, denom) {
	var nStart = Math.floor(min.n * denom / min.d) + 1;
	var nEnd = Math.ceil(max.n * denom / max.d);
	return nEnd - nStart;
}

function countAllFractions(min, max, maxDenom) {
	var counts = [0];
	for (var denom = 1; denom <= maxDenom; ++denom) {
		counts[denom] = countFractions(min, max, denom);
	}

	for (var i = 1; i < maxDenom; ++i) {
		var count = counts[i];
		for (var j = i + i; j <= maxDenom; j += i) {
			counts[j] -= count;
		}
	}

	return Utils.arraySum(counts);
}

var min = { n: 1, d: 3 };
var max = { n: 1, d: 2 };

console.log('countAllFractions(min, max, 8)', countAllFractions(min, max, 8));
console.log('countAllFractions(min, max, 12000)', countAllFractions(min, max, 12000));
