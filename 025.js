
var f1 = '1';
var f2 = '1';
var term = 2;
var f;

do {
	++term;
	f = BigNum.add(f1, f2);
	f1 = f2;
	f2 = f;
}
while (f.length < 1000);

console.log(f);
console.log('term:', term);
