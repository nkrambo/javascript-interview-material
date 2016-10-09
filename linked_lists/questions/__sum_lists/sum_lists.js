
/**
* Sum Lists
*
* You have two numbers represented by a linked list, where each node contains a
* single digit. The digits are stored in reverse order, such that the 1's digit
* is at the head of the list. Write a function that adds the two numbers and
* returns the sum as a linked list.
*
* Example:
* Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
* Output: 2 -> 1 -> 9. That is, 912.
*
* Follow Up:
* Suppose the digits are stored in forward order. Reapeat the above problem.
*
* Example: Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
* Output: 9 -> 1 -> 2. That is, 912.
*/

/**
* sumLists()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {object} list1 linked list
* @param {object} list2 linked list
* @return {number} returns the sum of list1 and list2
*/

function sumLists(list1, list2) {

  // type check
  if (!(list1 instanceof LinkedList) || !(list2 instanceof LinkedList)) {
    new Error('sumListsReverse: Expects 2 parameters of [object LinkedList].');
  }

  const results = new LinkedList();

  let node1 = list1.head;
  let node2 = list2.head;
  let carry = 0;
  let sum;

  // add up matched nodes
  while (node1 && node2) {
    sum = node1.value + node2.value + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    results.add(sum, results.length);
    node1 = node1.next;
    node2 = node2.next;
  }

  // get any remaining values
  let node = node1 || node2;

  while (node) {
    sum = node.value + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    results.add(sum, results.length);
    node = node.next;
  }
  // check for any remainder
  if (carry > 0) results.add(carry, results.length);

  return results;
}

export default sumLists;
