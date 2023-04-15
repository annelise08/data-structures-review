/*
 Write a function, dfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 9, 4, 2, 3]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const dfs = (root) => {
  // TO DO
  const queue = [root];
  const result = [];

  while(queue.length > 0){
    // assign node to the shifted off node from the queue
    const node = queue.shift();
    // add the value to the results array
    result.push(node.val)
    // if node has as left val, add it to the queue
    if (node.left) queue.push(node.left);
    // if node has a right val, add it to the queue
    if (node.right) queue.push(node.right);
  }

  return result;
};
const eight = new Node(8);
const one = new Node(1);
const two = new Node(2);
const nine = new Node(9);
const four = new Node(4);
const three = new Node(3);
eight.left = one;
eight.right = two;
one.left = nine;
one.right = four;
two.right = three;

console.log(dfs(eight))
console.log()


module.exports = { dfs };
