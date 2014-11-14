function sumDigits(n) {
	return Utils.arraySum(Utils.getDigits(n));
}

var limit = 100;
var max = {
	a: 0,
	b: 0,
	sumDigits: 0
};

for (var a = 1; a < limit; ++a) {
	var n = new BigNum(a);
	for (var b = 1; b < limit; ++b) {
		var s = sumDigits(n);
		if (s > max.sumDigits) {
			max = {
				a: a,
				b: b,
				sumDigits: s
			};
		}
		n.mul(a);
	}
}

console.log('max', max);
