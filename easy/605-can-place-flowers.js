/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

function isValidIdx(flowerbed, idx) {
  if (flowerbed[idx] === 1) return false;

  if (idx === 0) {
    if (idx + 1 < flowerbed.length && flowerbed[idx + 1] === 1) return false;
    return true;
  }

  if (idx === flowerbed.length - 1) {
    if (idx - 1 >= 0 && flowerbed[idx - 1] === 1) return false;
    return true;
  }

  return flowerbed[idx - 1] !== 1 && flowerbed[idx + 1] !== 1;
}

var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  while (n > 0 && i < flowerbed.length) {
    if (isValidIdx(flowerbed, i)) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }

  return n === 0;
};
