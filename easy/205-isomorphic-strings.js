/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const char1 = s[i];
    const char2 = t[i];

    if (map.has(char1)) {
      if (map.get(char1) !== char2) {
        return false;
      }
    } else {
      if (set.has(char2)) {
        return false;
      }
      map.set(char1, char2);
      set.add(char2);
    }
  }

  return true;
};
