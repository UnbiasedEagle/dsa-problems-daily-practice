/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let tail = head;

  while (tail) {
    const nextNode = tail.next;
    tail.next = prev;
    prev = tail;
    tail = nextNode;
  }

  return prev;
};
