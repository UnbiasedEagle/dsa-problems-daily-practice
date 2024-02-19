/**
 * @param {string} s
 * @return {boolean}
 */

function isValidChar(char) {
  return (
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z') ||
    (char >= '0' && char <= '9')
  );
}

var isPalindrome = function (s) {
  s = s.toLowerCase();

  let low = 0;
  let high = s.length - 1;

  while (low <= high) {
    if (!isValidChar(s[low])) {
      low++;
      continue;
    }
    if (!isValidChar(s[high])) {
      high--;
      continue;
    }

    if (s[low] !== s[high]) {
      return false;
    }

    low++;
    high--;
  }

  return true;
};
