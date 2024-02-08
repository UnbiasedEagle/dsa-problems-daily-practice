/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummyNode = new ListNode();
  let tail = dummyNode;

  let tail1 = list1;
  let tail2 = list2;

  while (tail1 && tail2) {
    if (tail1.val < tail2.val) {
      tail.next = tail1;
      tail1 = tail1.next;
    } else {
      tail.next = tail2;
      tail2 = tail2.next;
    }
    tail = tail.next;
  }

  if (tail1) {
    tail.next = tail1;
  }

  if (tail2) {
    tail.next = tail2;
  }

  return dummyNode.next;
};
