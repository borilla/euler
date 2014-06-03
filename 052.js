
function hasPermutedMultiples(n, multiples) {
	var sn = '' + n;
	var m = n;
	for (var i = 1; i < multiples; ++i) {
		m += n;
		var sm = '' + m;
		if (!Utils.isPermutationOf(sn, sm)) {
			return false;
		}
	}
	return true;
}

function getPermutedMultiples(multiples) {
	var n = 0;
	while (++n) {
		if (hasPermutedMultiples(n, multiples)) {
			return n;
		}
	}
}

console.log('getPermutedMultiples(2)', getPermutedMultiples(2));
console.log('getPermutedMultiples(6)', getPermutedMultiples(6));
