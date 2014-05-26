
var results = [];

for (var n1 = 10; n1 < 100; ++n1) {
	for (var d1 = n1; d1 < 100; ++d1) {
		var digits = n1.toString().split('');
		digits.forEach(function(digit) {
			var ns = n1.toString().replace(digit, '');
			var ds = d1.toString().replace(digit, '');
			if (ns.length == 1 && ds.length == 1 && digit != '0' && ns != ds) {
				var n2 = +ns;
				var d2 = +ds;
				if (n1 * d2 == n2 * d1) {
					console.log(n1 + '/' + d1, n2 + '/' + d2);
					results.push({
						n1: n1,
						d1: d1,
						n2: n2,
						d2: d2
					});
				}
			}
		});
	}
}

console.log('results', results);

var numeratorProduct = Utils.arrayProduct(results.map(function(result) {
	return result.n2;
}));

var denominatorProduct = Utils.arrayProduct(results.map(function(result) {
	return result.d2;
}));

console.log('numerator product', numeratorProduct);
console.log('denominator product', denominatorProduct);

var commonFactor = Utils.commonFactor(numeratorProduct, denominatorProduct);
console.log('common factor', commonFactor);

console.log('reduced denominator', denominatorProduct / commonFactor);
