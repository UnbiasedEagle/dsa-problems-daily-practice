/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  result.push([1]);

  for (let i = 1; i < numRows; i++) {
    const current = [1];

    for (let j = 1; j < numRows; j++) {
      current[j] = current[i - 1][j - 1] + current[i - 1][j];
    }

    current.push(1);
    result.push(current);
  }

  return result;
};
