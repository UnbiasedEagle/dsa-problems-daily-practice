/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
  const dp = Array.from({ length: s.length + 1 }).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const current = s.slice(i, i + word.length);

      if (current === word && i + word.length <= s.length) {
        dp[i] = dp[i + word.length];
      }

      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
};
