/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  const diff = high - low + 1;

  if (diff % 2 !== 0) {
    if (low % 2 !== 0) {
      return Math.ceil(diff / 2);
    }
    return Math.floor(diff / 2);
  }

  return diff / 2;
};
