/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  while (k > 0) {
    let currentElement = grid[0][0];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const newCurrent = grid[i][j];
        grid[i][j] = currentElement;
        currentElement = newCurrent;
      }
    }

    grid[0][0] = currentElement;
    k--;
  }

  return grid;
};
