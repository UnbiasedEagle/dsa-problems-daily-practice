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
 * @return {number}
 */

function helper(root) {
  if (!root) {
    return Infinity;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  const leftDepth = helper(root.left);
  const rightDepth = helper(root.right);

  return Math.min(leftDepth, rightDepth) + 1;
}

var minDepth = function (root) {
  const result = helper(root);
  return result === Infinity ? 0 : result;
};
