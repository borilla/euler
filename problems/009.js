var sqrts = [];
var squares = (function() {
	var squares = [];
	for (var i = 1; i * i <= 1e6; ++i) {
		squares.push(i * i);
		sqrts.push(i);
	}
	return squares;
}());

var length = squares.length;
for (var i = length - 1; i >= 0; --i) {
	var c = sqrts[i];
	var c2 = squares[i];
	for (var j = 0; j < i; ++j) {
		var a = sqrts[j];
		var a2 = squares[j];
		var b2 = c2 - a2;
		for (var k = j; k < i; ++k) {
			if (squares[k] == b2) {
				var b = sqrts[k];
				var sum = a + b + c;
				if (sum == 1000) {
					console.log({
						a: a,
						b: b,
						c: c,
						sum: sum,
						product: a * b * c
					});
				}
			}
		}
	}
}
