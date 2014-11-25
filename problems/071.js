// find numerator of closest fraction below target, whose denominator is d
function findClosestNumerator(d, tN, tD) {
	var n = Math.floor(d * tN / tD);
	return (n * tD == tN * d) ? n - 1 : n;
}

// find maximum "closest fraction" to target for denominators up to maxDenom
function closestFraction(maxDenom, targetN, targetD) {
	var cN = 0;
	var cD = 1;
	for (var d = 1; d <= maxDenom; ++d) {
		var n = findClosestNumerator(d, targetN, targetD);
		if (n * cD > cN * d) {
			cN = n;
			cD = d;
		}
	}
	return reduceFraction(cN, cD);
}

function reduceFraction(n, d) {
	var factor = Utils.commonFactor(n, d);
	return {
		n: n / factor,
		d: d / factor
	};
}

console.log(closestFraction(8, 3, 7));
console.log(closestFraction(1000000, 3, 7));
