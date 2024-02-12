/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  let rs = 0;
  let re = matrix.length - 1;
  let cs = 0;
  let ce = matrix[0].length - 1;

  while (rs <= re && cs <= ce) {
    if (rs <= re) {
      for (let i = cs; i <= ce; i++) {
        result.push(matrix[rs][i]);
      }
      rs++;
    }

    if (cs <= ce) {
      for (let i = rs; i <= re; i++) {
        result.push(matrix[i][ce]);
      }
      ce--;
    }

    if (rs <= re) {
      for (let i = ce; i >= cs; i--) {
        result.push(matrix[re][i]);
      }
      re--;
    }

    if (cs <= ce) {
      for (let i = re; i >= rs; i--) {
        result.push(matrix[i][cs]);
      }
      cs++;
    }
  }

  return result;
};
