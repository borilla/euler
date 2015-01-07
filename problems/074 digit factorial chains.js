function digitFactorialSum(n) {
	var memo = digitFactorialSum.memo;
	var sum = memo[n];
	if (!sum) {
		var digits = ('' + n).split('');
		var factorials = digits.map(function(digit) {
			return Utils.getFactorial(digit);
		});
		sum = memo[n] = Utils.arraySum(factorials);
	}
	return sum;
}
digitFactorialSum.memo = {};

console.log('digitFactorialSum(145)', digitFactorialSum(145));
console.log('digitFactorialSum(69)', digitFactorialSum(69));

function digitFactorialChain(n) {
	var chain = [];
	do {
		chain.push(n);
		n = digitFactorialSum(n);
	} while (!chainContains(n));
	return chain;

	function chainContains(n) {
		for (var i = 0, l = chain.length; i < l; ++i) {
			if (chain[i] == n) {
				return true;
			}
		}
		return false;
	}
}

console.log('digitFactorialChain(145)', digitFactorialChain(145));
console.log('digitFactorialChain(69)', digitFactorialChain(69));

function factorialChainsOfLength(l) {
	var chains = [];
	for (var n = 1; n < 1e6; ++n) {
		var chain = digitFactorialChain(n);
		if (chain.length == l) {
			chains.push(chain);
		}
	}
	return chains.length;
}

console.log('factorialChainsOfLength(60)', factorialChainsOfLength(60)); // 402
