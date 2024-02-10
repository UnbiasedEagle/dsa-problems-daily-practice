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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function helper(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if ((root1 && !root2) || (!root1 && root2)) return false;

  return (
    helper(root1.left, root2.left) &&
    helper(root1.right, root2.right) &&
    root1.val === root2.val
  );
}

var isSubtree = function (root, subRoot) {
  if (!root) return false;

  const left = isSubtree(root.left, subRoot);
  const right = isSubtree(root.right, subRoot);
  const current = helper(root, subRoot);

  return left || right || current;
};
