/**
 Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
 The function should return the total sum of all values in the linked list.

 5 -> 4 -> 3 -> -1 -> 7
 Output => 18

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Approach:
// Time & Space Complexity:
const sumList = (head) => {
  // TO DO
  // initialize sum
  let sum = 0;
  // initialize current and next
  let curr = head;
  // while val is not not null, add val to sum
  while (curr !== null){
    sum += curr.val;
    curr = curr.next;
  }
  // return sum
  return sum;
};

const head = new Node(5);
head.next = new Node(6);
head.next.next = new Node(7);

console.log(sumList(head))

module.exports = { sumList };
