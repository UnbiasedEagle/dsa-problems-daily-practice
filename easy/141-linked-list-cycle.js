/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;

    if (fast) {
      fast = fast.next;
    }

    if (fast !== null && fast === slow) return true;
  }

  return false;
};
