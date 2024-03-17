/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const result = [];

  arr.forEach((item, i) => {
    result.push(fn(item, i));
  });

  return result;
};
