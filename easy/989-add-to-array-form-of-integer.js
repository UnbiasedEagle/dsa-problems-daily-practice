/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function (num, k) {
  num = num.reverse();
  let i = 0;

  while (k !== 0) {
    const digit = k % 10;

    if (i < num.length) {
      num[i] = num[i] + digit;
    } else {
      num.push(digit);
    }

    const carry = Math.floor(num[i] / 10);
    num[i] = num[i] % 10;
    k = Math.floor(k / 10);
    k += carry;
    i++;
  }

  return num.reverse();
};
