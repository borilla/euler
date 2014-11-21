function xGonSolutions(x) {
	var max = x * 2;
	var lastIterationLength = (x - 1) * 3;

	// for each potential starting group
	var solutions = [];
	for (var outer = 1; outer <= max; ++outer) {
		for (var inner1 = 1; inner1 <= max; ++inner1) {
			if (inner1 != outer) {
				for (var inner2 = 1; inner2 <= max; ++inner2) {
					if (inner2 != outer && inner2 != inner1) {
						var total = outer + inner1 + inner2;
						var solution = findSolution(total, [outer, inner1, inner2]);
						if (solution) {
							console.log('total', total, solution);
							solutions.push(solution);
						}
					}
				}
			}
		}
	}
	return solutions;

	function findSolution(total, numbers) {
		for (var outer = numbers[0] + 1; outer <= max; ++outer) {
			if (!isNumberUsed(outer)) {
				var inner1 = numbers[numbers.length - 1];
				var inner2 = total - outer - inner1;
				if (inner2 != outer && inner2 != inner1 && inner2 >= 1 && inner2 <= max) {
					var isLastIteration = numbers.length == lastIterationLength;
					if (isLastIteration) {
						return (inner2 == numbers[1]) ? numbers.concat(outer, inner1, inner2) : false;
					}
					if (!isNumberUsed(inner2)) {
						var solution = findSolution(total, numbers.concat(outer, inner1, inner2));
						if (solution) {
							return solution;
						}
					}
				}
			}
		}
		return false;

		function isNumberUsed(number) {
			return numbers.indexOf(number) != -1;
		}
	}
}

var solutions3 = xGonSolutions(3);
var solutions5 = xGonSolutions(5);

var strings = solutions5.map(function(solution) {
	return solution.join('');
}).filter(function(str) {
	return str.length == 16;
});

console.log('strings of length 16', strings);
