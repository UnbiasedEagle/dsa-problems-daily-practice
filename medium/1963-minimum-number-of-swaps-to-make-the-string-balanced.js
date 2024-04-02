/**
 * @param {string} s
 * @return {number}
 */

var minSwaps = function (s) {
  let maxi = 0;
  let current = 0;
  for (const char of s) {
    if (char === '[') {
      current--;
    } else {
      current++;
    }
    maxi = Math.max(maxi, current);
  }

  return maxi % 2 === 0 ? Math.floor(maxi / 2) : Math.floor(maxi / 2) + 1;
};
