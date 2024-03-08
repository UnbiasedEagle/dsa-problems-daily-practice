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
 * @return {string}
 */
var tree2str = function (root) {
  const result = [];

  function preorder(root) {
    if (!root) return;

    result.push('(');
    result.push(root.val.toString());

    if (!root.left && root.right) {
      result.push('()');
    }

    preorder(root.left);
    preorder(root.right);

    result.push(')');
  }

  preorder(root);

  return result.slice(1, result.length - 1);
};
