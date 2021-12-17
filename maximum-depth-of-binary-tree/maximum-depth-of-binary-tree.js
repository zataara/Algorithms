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
var maxDepth = function(root) {
    function helper(root, level) {
    if(!root) return level;
    return Math.max(helper(root.left, level + 1), helper(root.right, level +1));
  }
  return helper(root, 0);
};