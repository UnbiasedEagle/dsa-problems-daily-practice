/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let i = 0;

  while (i < s.length) {
    if (i + 1 < s.length && romanIntMap[s[i]] < romanIntMap[s[i + 1]]) {
      result += romanIntMap[s[i + 1]] - romanIntMap[s[i]];
      i += 2;
    } else {
      result += romanIntMap[s[i]];
      i++;
    }
  }

  return result;
};
