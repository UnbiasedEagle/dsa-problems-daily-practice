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
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  const temp1 = inorderTraversal(root.left);
  const temp2 = [root.val];
  const temp3 = inorderTraversal(root.right);

  return [...temp1, ...temp2, ...temp3];
};
