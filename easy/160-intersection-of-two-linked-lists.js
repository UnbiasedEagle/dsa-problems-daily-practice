/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let node1 = headA;
  let node2 = headB;

  while (node1 && node2) {
    node1 = node1.next;
    node2 = node2.next;
  }

  let tempHeadA = headA;
  let tempHeadB = headB;

  while (node1) {
    tempHeadA = tempHeadA.next;
    node1 = node1.next;
  }

  while (node2) {
    tempHeadB = tempHeadB.next;
    node2 = node2.next;
  }

  while (tempHeadA && tempHeadB) {
    if (tempHeadA === tempHeadB) {
      return tempHeadA;
    }
    tempHeadA = tempHeadA.next;
    tempHeadB = tempHeadB.next;
  }

  return null;
};
