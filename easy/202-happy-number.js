/**
 * @param {number} n
 * @return {boolean}
 */

function getDigitSquareTotal(n) {
  let total = 0;

  while (n > 0) {
    const digit = n % 10;
    total += digit * digit;
    n = Math.floor(n / 10);
  }

  return total;
}

var isHappy = function (n) {
  const set = new Set();

  while (!set.has(n)) {
    const digitSquareTotal = getDigitSquareTotal(n);

    if (digitSquareTotal === 1) return true;

    set.add(n);

    n = digitSquareTotal;
  }

  return false;
};
