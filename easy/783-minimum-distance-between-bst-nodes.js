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
var minDiffInBST = function (root) {
  let result = Infinity;
  let prevNode = null;

  function dfs(root) {
    if (!root) return;

    dfs(root.left);

    if (prevNode) {
      result = Math.min(result, Math.abs(prevNode.val - root.val));
    }

    prevNode = root;

    dfs(root.right);
  }

  dfs(root);

  return result;
};
