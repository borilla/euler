var arr = [
	[75],
	[95, 64],
	[17, 47, 82],
	[18, 35, 87, 10],
	[20,  4, 82, 47, 65],
	[19,  1, 23, 75,  3, 34],
	[88,  2, 77, 73,  7, 63, 67],
	[99, 65,  4, 28,  6, 16, 70, 92],
	[41, 41, 26, 56, 83, 40, 80, 70, 33],
	[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
	[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
	[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
	[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
	[63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
	[ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]
];

function reduce(a) {
	if (a === arr) {
		a = a.slice();
	}
	if (a.length == 1) {
		return a[0];
	}
	// else
	var row0 = a[0];
	var row1 = a[1];
	row1.forEach(function(val1, index) {
		var val0 = Math.max(row0[index - 1] || 0, row0[index] || 0);
		row1[index] = val1 + val0;
	});
	return reduce(a.slice(1));
}

function maxFromArray(a) {
	return Math.max.apply(this, a);
}

var reduced = reduce(arr);
console.log(reduced);
console.log('max = ' + maxFromArray(reduced));
