/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const closeOpenMap = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  const stack = [];

  for (const char of s) {
    if (!(char in closeOpenMap)) {
      stack.push(char);
    } else {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== closeOpenMap[char]
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};
