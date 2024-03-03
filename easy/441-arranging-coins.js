/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let low = 1;
  let high = n;
  let result = 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const sum = (mid * (mid + 1)) / 2;

    if (sum <= n) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};
