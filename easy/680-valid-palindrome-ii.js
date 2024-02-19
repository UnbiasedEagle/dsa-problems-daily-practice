/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

var validPalindrome = function (s) {
  if (isPalindrome(s)) {
    return true;
  }

  let low = 0;
  let high = s.length - 1;

  while (low <= high) {
    if (s[low] !== s[high]) {
      break;
    }
    low++;
    high--;
  }

  return (
    isPalindrome(s.slice(0, low) + s.slice(low + 1)) ||
    isPalindrome(s.slice(0, high) + s.slice(high + 1))
  );
};
