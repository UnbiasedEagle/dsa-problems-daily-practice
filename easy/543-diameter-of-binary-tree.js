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
var diameterOfBinaryTree = function (root) {
  function helper(root) {
    if (root === null) return { height: 0, diameter: 0 };

    const left = helper(root.left);
    const right = helper(root.right);

    const height = Math.max(right.height, left.height) + 1;
    const diameter = Math.max(
      Math.max(left.diameter, right.diameter),
      left.height + right.height
    );

    return { height, diameter };
  }

  return helper(root).diameter;
};
