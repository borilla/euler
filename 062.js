
function calcNDigitCubes(digits, start) {
	var result = [];
	var big = '';
	var n = start || 1;
	while (big.length < digits) {
		big = BigNum.pow(n, 3);
		++n;
	}
	while (big.length == digits) {
		result.push(big);
		big = BigNum.pow(n, 3);
		++n;
	}
	return result;
}

// console.log('calcNDigitCubes(1)', calcNDigitCubes(1));
// console.log('calcNDigitCubes(2)', calcNDigitCubes(2));
// console.log('calcNDigitCubes(3)', calcNDigitCubes(3));
// console.log('calcNDigitCubes(4)', calcNDigitCubes(4));
// console.log('calcNDigitCubes(5)', calcNDigitCubes(5));
// console.log('calcNDigitCubes(6)', calcNDigitCubes(6));
// console.log('calcNDigitCubes(7)', calcNDigitCubes(7));
// console.log('calcNDigitCubes(8)', calcNDigitCubes(8));

function findPermutations(cubes, perms) {
	for (var i = 0, l = cubes.length; i <l; ++i) {
		var results = [];
		var ci = cubes[i];
		for (var j = 0; j < l; ++j) {
			var cj = cubes[j];
			if (Utils.isPermutationOf(ci, cj)) {
				results.push(cj);
				if (results.length == perms) {
					return results;
				}
			}
		}
	}
	return;
}

console.log(findPermutations(calcNDigitCubes(8), 3));
console.log(findPermutations(calcNDigitCubes(12), 5));
