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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function helper(root) {
    if (!root) return { height: 0, balanced: true };

    const left = helper(root.left);
    const right = helper(root.right);

    if (!left.balanced || !right.balanced) {
      return { height: 0, balanced: false };
    }

    if (Math.abs(left.height - right.height) > 1) {
      return { height: 0, balanced: false };
    }

    return { height: Math.max(left.height, right.height) + 1, balanced: true };
  }

  return helper(root).balanced;
};
