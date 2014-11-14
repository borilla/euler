var fib = (function() {
	var a = 0;
	var b = 1;

	return function() {
		var c = a + b;
		a = b;
		b = c;
		return c;
	}
}());

var sum = 0;
var f;

while ((f = fib()) < 4e6) {
	console.log(f)
	if (f % 2 == 0) {
		sum += f;
	}
}
console.log('sum: ', sum);
