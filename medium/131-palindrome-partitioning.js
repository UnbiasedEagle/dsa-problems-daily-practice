/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  function execute(start = 0, arr = []) {
    if (start === s.length) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const str = s.slice(start, i + 1);
      if (str.length > 0 && isPalindrome(str)) {
        arr.push(str);
        execute(i + 1, arr);
        arr.pop();
      }
    }
  }

  execute();

  return result;
};
