/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;

  if ((p && q === null) || (q && p === null)) return false;

  const leftSide = isSameTree(p.left, q.left);
  const rightSide = isSameTree(p.right, q.right);

  if (!leftSide || !rightSide) return false;

  if (p.val !== q.val) return false;

  return true;
};
