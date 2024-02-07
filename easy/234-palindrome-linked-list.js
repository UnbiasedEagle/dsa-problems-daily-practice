/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function reverseList(head) {
  let prev = null;
  let tail = head;

  while (tail) {
    const nextNode = tail.next;
    tail.next = prev;
    prev = tail;
    tail = nextNode;
  }

  return prev;
}

var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;

    if (fast) {
      fast = fast.next;
    }
  }

  slow = reverseList(slow);

  let tail = head;
  while (slow && tail) {
    if (slow.val !== tail.val) return false;

    slow = slow.next;
    tail = tail.next;
  }

  return true;
};
