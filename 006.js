function sumSquares(n) {
	var sum = 0;
	for (var i = 1; i <= n; ++i) {
		sum += i * i;
	}
	return sum;
}

function squaredSum(n) {
	var sum = 0;
	for (var i = 1; i <= n; ++i) {
		sum += i;
	}
	return sum * sum;
}

var n = 100;

console.log(sumSquares(n));
console.log(squaredSum(n));
console.log(squaredSum(n) - sumSquares(n));
