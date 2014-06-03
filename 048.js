
// limit BigNum calculations to just final 10 digits
BigNum.limit = 10;

var sum = new BigNum(0);
for (var i = 1; i <= 1000; ++i) {
	var add = new BigNum(i);
	add.pow(i);
	sum.add(add);
}

console.log('sum', sum);
