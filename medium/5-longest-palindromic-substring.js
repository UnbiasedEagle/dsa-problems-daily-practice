/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    let low = i - 1;
    let high = i + 1;

    let currentPallindrome = s[i];

    while (high < s.length && s[high] === s[i]) {
      currentPallindrome += s[high];
      high++;
    }

    while (low >= 0 && high < s.length && s[low] === s[high]) {
      currentPallindrome = s[low] + currentPallindrome + s[high];
      low--;
      high++;
    }

    if (currentPallindrome.length > result.length) {
      result = currentPallindrome;
    }
  }

  return result;
};
