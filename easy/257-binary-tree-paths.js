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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  function helper(root, prefix = '') {
    if (!root.left && !root.right) {
      result.push(prefix + root.val.toString());
      return;
    }

    if (root.left) {
      helper(root.left, prefix + root.val.toString() + '->');
    }

    if (root.right) {
      helper(root.right, prefix + root.val.toString() + '->');
    }
  }

  helper(root);

  return result;
};
