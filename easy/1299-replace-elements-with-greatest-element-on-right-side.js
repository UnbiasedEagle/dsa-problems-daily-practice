/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let greatest = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = greatest;
    greatest = Math.max(greatest, current);
  }

  return arr;
};
