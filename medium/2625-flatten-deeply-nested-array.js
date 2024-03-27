/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const result = [];

  for (const item of arr) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      if (n === 0) {
        result.push(item);
      } else {
        result.push(...flat(item, n - 1));
      }
    }
  }

  return result;
};
