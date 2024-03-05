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
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  let curr = root;
  const result = [];
  const stack = [];

  while (curr || stack.length > 0) {
    while (curr) {
      result.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }

    const node = stack.pop();

    if (node) {
      curr = node.right;
    }
  }

  return result;
};
