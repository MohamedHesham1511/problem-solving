// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  // console.log(p, q);
  // console.log(p === null && q === null);
  if (p === null && q === null) {
    return true;
  }

  // console.log(p === null || q === null);
  if (p === null || q === null) {
    return false;
  }

  // console.log(p.value !== q.value);
  if (p.value !== q.value) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));

isSameTree(p, q); //  return false.
