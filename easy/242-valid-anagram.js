/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charMap = new Map();

  for (const char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charMap.has(char)) return false;

    charMap.set(char, charMap.get(char) - 1);

    if (charMap.get(char) === 0) {
      charMap.delete(char);
    }
  }

  return true;
};
