/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const charArr = Array.from({ length: 26 }).fill(0);

    for (const char of str) {
      const idx = char.charCodeAt(0) - 97;
      charArr[idx]++;
    }

    let key = '';
    for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] > 0) {
        key += charArr[i].toString() + String.fromCharCode(i + 97) + '-';
      }
    }

    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  const result = [];

  for (const [key, values] of map) {
    result.push(values);
  }

  return result;
};
