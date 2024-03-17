/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let i = 0;

  const result = [];

  while (i < arr.length) {
    result.push(arr.slice(i, i + size));
    i += size;
  }

  return result;
};
