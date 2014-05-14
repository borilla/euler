var n = 0;
var triangle = 0;
var factors = [];

do {
	n += 1;
	triangle = triangle + n;
	factors = Factors.allFactors(triangle);
	console.log(triangle, factors.length, factors);
} while (factors.length < 20);

triangle = 76576500;
factors = Factors.allFactors(triangle);
console.log(triangle, factors.length, factors);
