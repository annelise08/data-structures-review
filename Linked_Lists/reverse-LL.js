/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach:
// Time & Space Complexity:
const reverseList = (head) => {
  // TO DO
  // create a set of the current ll
  const set = [];
  let curr = head;
  while (curr !== null){
    set.push(curr.val);
    curr = curr.next;
  }
  const newHead = new Node(set.pop())
  curr = newHead;
  // while set has length
  while (set.length){
    // pop off the end of the set and make it the curr node's next value
    curr.next = new Node(set.pop());
    curr = curr.next;
  }
  return newHead;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log(reverseList(head))

module.exports = { reverseList };
