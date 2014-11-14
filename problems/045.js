var Triangles = (function() {
	var arr = [];
	var obj = {};
	var max = 0;
	var n = 0;

	function calcNext() {
		n += 1;
		max = arr[n] = (n * n + n) / 2;
		obj[max] = true;
	}

	function getTriangular(m) {
		while (n < m) {
			calcNext();
		}
		return arr[m];
	}

	function isTriangular(n) {
		while (max < n) {
			calcNext();
		}
		return !!obj[n];
	}

	return {
		getTriangular: getTriangular,
		isTriangular: isTriangular
	};
}());

var Pentagonals = (function() {
	var arr = [];
	var obj = {};
	var max = 0;
	var n = 0;

	function calcNext() {
		n += 1;
		max = arr[n] = (3 * n * n - n) / 2;
		obj[max] = true;
	}

	function getPentagonal(m) {
		while (n < m) {
			calcNext();
		}
		return arr[m];
	}

	function isPentagonal(n) {
		while (max < n) {
			calcNext();
		}
		return !!obj[n];
	}

	return {
		getPentagonal: getPentagonal,
		isPentagonal: isPentagonal
	};
}());

var Hexagonals = (function() {
	var arr = [];
	var obj = {};
	var max = 0;
	var n = 0;

	function calcNext() {
		n += 1;
		max = arr[n] = 2 * n * n - n;
		obj[max] = true;
	}

	function getHexagonal(m) {
		while (n < m) {
			calcNext();
		}
		return arr[m];
	}

	function isHexagonal(n) {
		while (max < n) {
			calcNext();
		}
		return !!obj[n];
	}

	return {
		getHexagonal: getHexagonal,
		isHexagonal: isHexagonal
	};
}());

console.log('Triangles.getTriangular(1)', Triangles.getTriangular(1));
console.log('Triangles.getTriangular(2)', Triangles.getTriangular(2));
console.log('Triangles.getTriangular(3)', Triangles.getTriangular(3));
console.log('Triangles.getTriangular(4)', Triangles.getTriangular(4));

console.log('Pentagonals.getPentagonal(1)', Pentagonals.getPentagonal(1));
console.log('Pentagonals.getPentagonal(2)', Pentagonals.getPentagonal(2));
console.log('Pentagonals.getPentagonal(3)', Pentagonals.getPentagonal(3));
console.log('Pentagonals.getPentagonal(4)', Pentagonals.getPentagonal(4));

console.log('Hexagonals.getHexagonal(1)', Hexagonals.getHexagonal(1));
console.log('Hexagonals.getHexagonal(2)', Hexagonals.getHexagonal(2));
console.log('Hexagonals.getHexagonal(3)', Hexagonals.getHexagonal(3));
console.log('Hexagonals.getHexagonal(4)', Hexagonals.getHexagonal(4));

var n = 1;
var results = [];
while (results.length < 3) {
	var t = Triangles.getTriangular(n);
	if (Pentagonals.isPentagonal(t) && Hexagonals.isHexagonal(t)) {
		results.push(t);
	}
	n += 2;
}

console.log('results', results);
