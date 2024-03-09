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
var isSymmetric = function (root) {
  function dfs(leftNode, rightNode) {
    if (!leftNode && !rightNode) return true;
    if ((leftNode && !rightNode) || (rightNode && !leftNode)) return false;

    return (
      dfs(leftNode.left, rightNode.right) &&
      dfs(leftNode.right, rightNode.left) &&
      leftNode.val === rightNode.val
    );
  }

  return dfs(root, root);
};
