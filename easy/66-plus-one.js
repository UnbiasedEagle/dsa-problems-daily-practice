/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let currentTotal = 1;

  let i = digits.length - 1;
  const result = [];

  while (i >= 0) {
    const sum = currentTotal + digits[i];
    result.push(sum % 10);
    currentTotal = Math.floor(sum / 10);
    i--;
  }

  while (currentTotal > 0) {
    result.push(currentTotal % 10);
    currentTotal = Math.floor(currentTotal / 10);
  }

  return result.reverse();
};
