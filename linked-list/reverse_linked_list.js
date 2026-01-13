/**
 * Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Constraints:
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 * Time: O(n)
 * Space: O(1)
 * where n is the length of the list
 */

// reverse linked list iteratively: time: O(n) & space: O(1)
function reverseLinkedListIterative(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// reverse linked list recursively: time: O(n) & space: O(n)
function reverseLinkedListRecursive(head) {
  if (!head || !head.next) return head;
  const newHead = reverseLinkedListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

console.log(
  "Reverse linked list iteratively: ",
  reverseLinkedListIterative([1, 2, 3, 4, 5])
); // [5,4,3,2,1]

console.log(
  "Reverse linked list recursively: ",
  reverseLinkedListRecursive([0,1,2,3])
); // [3,2,1,0]
