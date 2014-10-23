var results = ['1 = 1^1'];
for (var n = 2; n < 10; ++n) {
	var big = '';
	for (var p = 1; big.length < p && p < 50; ++p) {
		var big = BigNum.pow(n, p);
		if (big.length == p) {
			results.push(big + ' = ' + n + '^' + p);
		}
	}
}
console.log(results);
console.log(results.length);
