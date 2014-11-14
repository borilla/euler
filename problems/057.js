
var iterations = 1000;
var num = '1';
var denom = '1';
var expansions = [];
var count = 0;

for (var i = 0; i < iterations; ++i) {
	var tmp = denom;
	denom = BigNum.add(num, denom);
	num = BigNum.add(denom, tmp);
	if (num.length > denom.length) {
		++count;
	}
	expansions.push(num + '/' + denom);
}

console.log('expansions', expansions);
console.log('count where numerator contains more digits than denominator', count);
