/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        flag = false;
        break;
      }
    }

    if (!flag) return commonPrefix;

    commonPrefix += char;
  }

  return commonPrefix;
};
