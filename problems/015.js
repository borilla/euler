var gridX = 20;
var gridY = 20;
var grid = [[]];
var val;

for (var y = 0; y <= gridY; ++y) {
	for (var x = 0; x <= gridX; ++x) {
		if (x == 0 && y == 0) {
			val = 1;
		}
		else if (x == 0) {
			val = grid[x][y - 1];
		}
		else if (y == 0) {
			grid[x] = [];
			val = grid[x - 1][y];
		}
		else {
			val = grid[x][y - 1] + grid[x - 1][y];
		}
		grid[x][y] = val;
	}
}

console.log('bottom right corner = ' + grid[gridX][gridY]);
