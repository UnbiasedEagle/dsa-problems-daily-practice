/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const t = [0, 1, 1];

  if (n < 3) return t[n];

  for (let i = 3; i <= n; i++) {
    const total = t[0] + t[1] + t[2];
    t[0] = t[1];
    t[1] = t[2];
    t[2] = total;
  }

  return t[2];
};
