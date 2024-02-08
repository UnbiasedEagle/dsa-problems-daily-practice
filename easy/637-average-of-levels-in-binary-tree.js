/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) {
    return [0];
  }
  const bfsArr = [root, null];
  const result = [];
  let sum = 0;
  let count = 0;

  while (bfsArr.length) {
    const node = bfsArr.shift();
    if (node === null) {
      if (count > 0) {
        const avg = sum / count;
        result.push(avg);
      }
      sum = 0;
      count = 0;
      if (bfsArr.length) {
        bfsArr.push(null);
      }
    } else {
      sum += node.val;
      count++;

      if (node.left) {
        bfsArr.push(node.left);
      }

      if (node.right) {
        bfsArr.push(node.right);
      }
    }
  }

  return result;
};
