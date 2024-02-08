/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let resultIdx = 0;
  let low = 0;
  let high = letters.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (letters[mid] <= target) {
      low = mid + 1;
    } else {
      resultIdx = mid;
      high = mid - 1;
    }
  }

  return letters[resultIdx];
};
