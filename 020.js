function factorial(n) {
	var f = new BigNum(1);
	while (n > 0) {
		f.mul(n);
		n -= 1;
	}
	return f;
}

console.log('factorial(10) = ' + factorial(10));
console.log('factorial(100) = ' + factorial(100));
