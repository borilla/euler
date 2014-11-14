function f(x) {
	return (x == 1) ? 1 : (4 * x * x) - (6 * x) + 6 + f(x - 2)
}

console.log(f(1)); // 1
console.log(f(3)); // 25
console.log(f(5)); // 101
console.log(f(1001)); // 669171001
