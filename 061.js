
for (var x = 3; x <= 8; ++x) {
	console.log(
		Utils.polygonal(x, 1),
		Utils.polygonal(x, 2),
		Utils.polygonal(x, 3),
		Utils.polygonal(x, 4),
		Utils.polygonal(x, 5)
	);
}

function getFourDigitPolygonals(x) {
	var i = 0;
	var p = 0;
	var result = [];
	while (p < 10000) {
		p = Utils.polygonal(x, ++i);
		if (p >= 1000 && p < 10000) {
			result.push({
				p: p,
				x: x
			});
		}
	}
	return result;
}

// console.log(getFourDigitPolygonals(3));
// console.log(getFourDigitPolygonals(4));
// console.log(getFourDigitPolygonals(5));
// console.log(getFourDigitPolygonals(6));
// console.log(getFourDigitPolygonals(7));
// console.log(getFourDigitPolygonals(8));

function getAllFourDigitPolygonals(max) {
	max = max || 8;
	var polygonals = [];
	for (var x = 3; x <= max; ++x) {
		polygonals = polygonals.concat(getFourDigitPolygonals(x));
	}
	return polygonals;
}

console.log(getAllFourDigitPolygonals());

function findCyclicalSet(all, size, set) {
	set = set || [];

	var candidates = findCandidates(set);
	for (var i = 0, l = candidates.length; i < l; ++i) {
		var candidate = candidates[i];
		set.push(candidate);
		if (checkSetComplete()) {
			return set;
		}
		// else, recurse
		var result = findCyclicalSet(all, size, set);
		if (result) {
			return result;
		}
		// else
		set.pop();
	}
	return false;

	function findCandidates() {
		if (set.length == 0) {
			return all;
		}
		var a = set[set.length - 1];
		return all.filter(isCandidate);

		function isCandidate(b) {
			return isPair(a, b) && !groupInSet(b);
		}

		function groupInSet(b) {
			return set.some(function (a) {
				return a.x == b.x;
			});
		}
	}

	function checkSetComplete() {
		if (set.length < size) {
			return false;
		}
		return isPair(set[size - 1], set[0]);
	}

	function isPair(a, b) {
		return ('' + a.p).slice(2, 4) == ('' + b.p).slice(0, 2);
	}
}

var size = 3;
var all = getAllFourDigitPolygonals(size + 2);
var set = findCyclicalSet(all, size)
var sum = set.reduce(function(a, b) {
	return a + b.p;
}, 0);

console.log(set, sum);

var size = 6;
var all = getAllFourDigitPolygonals(size + 2);
var set = findCyclicalSet(all, size)
var sum = set.reduce(function(a, b) {
	return a + b.p;
}, 0);

console.log(set, sum);
