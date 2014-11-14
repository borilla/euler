var coins = [1,2,5,10,20,50,100,200];

// http://stackoverflow.com/questions/4243831/how-to-count-possible-combination-for-coin-problem
// using dynamic programming (dp) to get increasingly complex results from simple starting state
// // http://community.topcoder.com/tc?module=Static&d1=tutorials&d2=dynProg
function findCombinationsCount(sum, coins) {
	var dp = [1];

	coins.forEach(function(coin) {
		for (var i = coin; i <= sum; ++i) {
			dp[i] = (dp[i] || 0) + dp[i - coin];
		}
	});

	return dp[sum];
}

console.log(findCombinationsCount(200, coins));
