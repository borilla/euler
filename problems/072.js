function reduceFraction(n, d) {
	d = n.d || d;
	n = n.n || n;
	var factor = Utils.commonFactor(n, d);
	return {
		n: n / factor,
		d: d / factor
	};
}

function reduceFractions(fractions) {
	return fractions.map(reduceFraction);
}

function sortFractions(fractions) {
	return fractions.sort(compareFractions);
}

function getUniqueFractions(fractions) {
	return fractions.filter(function(fraction, i) {
		var fi = fractions[i];
		for (var j = 0; j < i; ++j) {
			if (compareFractions(fi, fractions[j]) == 0) {
				return false;
			}
		}
		return true;
	});
}

function compareFractions(a, b) {
	var ap = a.n * b.d;
	var bp = b.n * a.d;
	return ap < bp ? -1 : ap == bp ? 0 : 1;
}

function getAllFractions(maxDenom) {
	var fractions = [];
	for (var d = 2; d <= maxDenom; ++d) {
		for (var n = 1; n < d; ++n) {
			fractions.push({
				n: n,
				d: d
			});
		}
	}
	return reduceFractions(sortFractions(getUniqueFractions(fractions)));
}

function totient(n) {
	var factors = Primes.getPrimeFactors(n);
	var num = n;
	var denom = 1;
	factors.forEach(function(factor) {
		num *= factor - 1;
		denom *= factor;
	});
	return num / denom;
}

function totientSum(n) {
	var sum = 0;
	for (var i = 2; i <= n; ++i) {
		sum += totient(i);
	}
	return sum;
}

console.log('getAllFractions(8)');
console.dir(getAllFractions(8));

console.log('getAllFractions(100)');
console.dir(getAllFractions(100));

console.log('totientSum(8)', totientSum(8));
console.log('totientSum(100)', totientSum(100));
console.log('totientSum(1e6)', totientSum(1e6));
