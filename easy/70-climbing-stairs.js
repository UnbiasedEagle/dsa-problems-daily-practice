/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1 || n === 2) return n;
  let current = 2;
  let prev = 1;

  for (let i = 3; i <= n; i++) {
    const temp = prev;
    prev = current;
    current = current + temp;
  }

  return current;
};
