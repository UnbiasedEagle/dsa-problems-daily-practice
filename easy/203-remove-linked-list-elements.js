/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let newHead = head;

  while (newHead && newHead.val === val) {
    newHead = newHead.next;
  }

  if (!newHead) return newHead;

  let prev = newHead;

  while (prev) {
    let currentNode = prev.next;
    while (currentNode && currentNode.val === val) {
      currentNode = currentNode.next;
    }

    prev.next = currentNode;
    prev = currentNode;
  }

  return newHead;
};
