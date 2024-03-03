/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [0];

  for (const operation of operations) {
    if (operation === '+') {
      const num1 = stack[stack.length - 1];
      const num2 = stack[stack.length - 2];
      stack.push(num1 + num2);
    } else if (operation === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operation === 'C') {
      stack.pop();
    } else {
      stack.push(+operation);
    }
  }

  return stack.reduce((acc, curr) => acc + curr);
};
