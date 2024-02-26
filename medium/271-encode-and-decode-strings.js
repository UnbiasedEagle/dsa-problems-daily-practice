class Solution {
  encode(strs) {
    return strs.reduce((acc, curr) => {
      return acc + curr.length + '#' + curr;
    }, '');
  }

  decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
      let length = 0;
      while (i < str.length && str[i] !== '#') {
        length = length * 10 + Number(str[i]);
        i++;
      }
      i++;
      result.push(str.slice(i, i + length));
      i += length;
    }

    return result;
  }
}

const sol = new Solution();

const str = sol.encode(['hello', 'world', 'leetcode', 'example']);

console.log(sol.decode(str));
