/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const left = Array.from({ length: s.length }, () =>
    Array.from({ length: 26 }).fill(0)
  );

  for (let i = s.length - 2; i >= 0; i--) {
    left[i] = [...left[i + 1]];
    const charCode = s.charCodeAt(i + 1);
    left[i][charCode - 97]++;
  }

  const map = new Map();

  map.set(s[0], 1);

  const ansSet = new Set();

  for (let i = 1; i < s.length - 1; i++) {
    for (let j = 0; j < 26; j++) {
      if (left[i][j] > 0 && map.has(String.fromCharCode(97 + j))) {
        ansSet.add(
          String.fromCharCode(97 + j) + s[i] + String.fromCharCode(97 + j)
        );
      }
    }

    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  return ansSet.size;
};
