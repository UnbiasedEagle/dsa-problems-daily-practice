/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;

  for (let i = 31; i >= 0; i--) {
    const bit = n & 1;
    if (bit) {
      result += 1 << i;
    }
    n = n >> 1;
  }

  return result >>> 0;
};
