var val = 1;
var str = '';
while (str.length < 1000000) {
	str += val;
	val++;
}

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
console.log(str[0] * str[9] * str[99] * str[999] * str[9999] * str[99999] * str[999999]);
