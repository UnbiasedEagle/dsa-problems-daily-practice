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
 * @param {number} targetSum
 * @return {boolean}
 */

function helper(root, targetSum) {
  if (root === null) return false;

  if (root.left === null && root.right === null) {
    if (targetSum - root.val === 0) return true;
    return false;
  }

  return (
    helper(root.left, targetSum - root.val) ||
    helper(root.right, targetSum - root.val)
  );
}

var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  return helper(root, targetSum);
};
