var root2 = [1,2,2,2,2,2,2,2,2,2,2]; // [1;2,2,2,2,2,2,2,2,2,2]
var e = [2,1,2,1,1,4,1,1,6,1,1,8,1]; // [2;1,2,1,1,4,1,1,6,1,1,8,1]

// get rational fraction convergent from continuous fraction (as an array)
function convergent(cf) {
	var l = cf.length;
	var n = new BigNum(cf[l - 1]);
	var d = new BigNum(1);
	for (var i = l - 2; i >= 0; --i) {
		var temp1 = n;
		n = d;
		d = temp1;
		var temp2 = new BigNum(cf[i]);
		temp2.mul(d);
		n.add(temp2);
	}
	return '' + n + '/' + d;
}

console.log(convergent([1])); // 1/1
console.log(convergent([1,2])); // 1 + 1/2 = 3/2
console.log(convergent([1,2,2])); // 1 + 1/(2 + 1/2) = 7/5
console.log(convergent([1,2,2,2])); // 17/12

console.log(convergent([2])); // 2
console.log(convergent([2,1])); // 3
console.log(convergent([2,1,2,1,1,4,1,1,6,1])); // 1457/536

// get continuous fraction representation of e, as an array
function cfe(length) {
	var e = [2];
	var k = 2;
	while (e.length < length) {
		e = e.concat(1, k, 1);
		k += 2;
	}
	e.length = length;
	return e;
}

console.log('cfe(1)', cfe(1));
console.log('cfe(2)', cfe(2));
console.log('cfe(3)', cfe(3));
console.log('cfe(4)', cfe(4));
console.log('cfe(10)', cfe(10));

console.log('convergent(cfe(10))', convergent(cfe(10)));

var c = convergent(cfe(100));
var numerator = c.split('/')[0];
console.log('convergent(cfe(100))', c);
console.log('sum of digits of numerator', Utils.sumDigits(numerator));
