/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) return [];

  let col = 0;

  let rowVal = [];
  const result = [];

  for (let i = 0; i < original.length; i++) {
    if (col < n) {
      rowVal.push(original[i]);
      col++;

      if (col === n) {
        result.push(rowVal);
        col = 0;
        rowVal = [];
      }
    }
  }

  return result;
};
