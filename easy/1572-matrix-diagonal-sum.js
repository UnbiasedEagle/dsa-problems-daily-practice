/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const row = mat.length;
  let sum = 0;

  for (let i = 0; i < row; i++) {
    sum += mat[i][i] + mat[i][row - 1 - i];
  }

  if (row % 2 !== 0) {
    const mid = Math.floor(row / 2);
    sum -= mat[mid][mid];
  }

  return sum;
};
