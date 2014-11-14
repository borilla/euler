
var squares = [];
for (var n = 0; n <= 1000; ++n) {
	squares.push(n * n);
}

function getSolutions(sum) {
	var solutions = [];
	for (var l1 = sum - 2; l1 > 0; --l1) {
		for (var l2 = l1 - 1; l2 > 0; --l2) {
			var l3 = sum - l1 - l2;
			if (l2 >= l3) {
				if (squares[l2] + squares[l3] == squares[l1]) {
					solutions.push([l1, l2, l3]);
				}
			}
		}
	}
	return solutions;
}

console.log('getSolutions(120)', getSolutions(120));

var results = [];
var maxCount = 0;
var max;
for (var sum = 1; sum <= 1000; ++sum) {
	var solutions = getSolutions(sum);
	var count = solutions.length;
	if (count) {
		var result = {
			sum: sum,
			solutions: solutions
		};
		results.push(result);
		if (count > maxCount) {
			maxCount = count;
			max = result;
		}
	}
}

console.log('results', results);
console.log('max', max);
