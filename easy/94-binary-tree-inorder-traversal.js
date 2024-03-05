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
  if (!root) return [];
  const result = [];

  const stack = [root];
  const visited = new Set();
  visited.add(root);

  while (stack.length > 0) {
    if (
      stack[stack.length - 1].left &&
      !visited.has(stack[stack.length - 1].left)
    ) {
      const node = stack[stack.length - 1];
      stack.push(node.left);
      visited.add(node.left);
      continue;
    }
    const node = stack.pop();
    result.push(node.val);

    if (node.right && !visited.has(node.right)) {
      stack.push(node.right);
      visited.add(node.right);
    }
  }

  return result;
};
