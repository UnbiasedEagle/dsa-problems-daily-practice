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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  let tail = head;

  while (tail) {
    let nextNode = tail.next;
    while (nextNode && nextNode.val === tail.val) {
      nextNode = nextNode.next;
    }

    tail.next = nextNode;
    tail = nextNode;
  }

  return head;
};
