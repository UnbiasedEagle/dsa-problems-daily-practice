/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let hasFirstRowZero = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; i < matrix[i].length; j++) {
      if (i === 0 && matrix[i][j] === 0) {
        hasFirstRowZero = true;
      } else if (i > 0 && matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (i === 0 && hasFirstRowZero) {
        matrix[i][j] = 0;
      } else if (i > 0 && (matrix[0][j] === 0 || matrix[i][0] === 0)) {
        matrix[i][j] = 0;
      }
    }
  }
};
