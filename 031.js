var coins = [1,2,5,10,20,50,100,200];

function same(a1, a2) {
	if (a1.length != a2.length) {
		return false;
	}
	for (var i = 0, l = a1.length; i < l; ++i) {
		if (a1[i] != a2[i]) {
			return false;
		}
	}
	return true;
}

function unique(a) {
	a.forEach(function(a) {
		a.sort();
	})
	a.sort();

	var result = [];
	for (var i = 0, l = a.length; i < l; ++i) {
		if (i == 0 || !(same(a[i], a[i - 1]))) {
			result.push(a[i]);
		}
	}
	return result;
}

var memo = {};
function c(x) {
	if (!memo[x]) {
		var combinations = [];
		coins.forEach(function(coin) {
			if (coin == x) {
				combinations.push([coin]);
			}
			if (coin < x) {
				c(x - coin).forEach(function(combination) {
					combinations.push([coin].concat(combination));
				});
			}
		});
		memo[x] = unique(combinations);
	}
	return memo[x];
}
