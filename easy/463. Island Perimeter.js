/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const visited = new Set();

  function dfs(i, j) {
    if (
      i >= grid.length ||
      j >= grid[0].length ||
      i < 0 ||
      j < 0 ||
      grid[i][j] === 0
    )
      return 1;

    const key = `${i}-${j}`;

    if (visited.has(key)) return 0;

    visited.add(key);
    const perimeter =
      dfs(i, j + 1) + dfs(i, j - 1) + dfs(i - 1, j) + dfs(i + 1, j);

    return perimeter;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }
};
