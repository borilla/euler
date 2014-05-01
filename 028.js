function f(x) {
	if (x == 1) {
		return 1;
	}
	// else
	return (4 * x * x) - (6 * x) + 6 + f(x - 2)
}

console.log(f(1));
console.log(f(5));
console.log(f(1001));
