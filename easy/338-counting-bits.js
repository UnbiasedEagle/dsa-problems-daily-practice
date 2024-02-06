/**
 * @param {number} n
 * @return {number[]}
 */

// function helper(n) {
//   if (n === 0) return 0;
//   let bits = 0;
//   while (n > 0) {
//     bits += n % 2;
//     n = Math.floor(n / 2);
//   }

//   return bits;
// }

// var countBits = function (n) {
//   const result = [];

//   for (let i = 0; i <= n; i++) {
//     result.push(helper(i));
//   }

//   return result;
// };

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const cache = [0, 1];
  const result = [];

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result[i] = cache[Math.floor(i / 2)];
    } else {
      result[i] = cache[i - 1] + 1;
    }
    cache[i] = result[i];
  }

  return result;
};
