
import LinkedList from '../../class/linked_list/linked_list';

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
* Let's review how simple long addition works to help us with this problem.
*
*     6 1 7
*   + 2 9 5
*   -------
*     9 1 2
*
* When we do long addition we start with the furthest right values in our numbers
* and add them together.
*
* The columns from right to left represent the number of 1s, 10s, 100s, 1000s etc...
* that make up our number.
*
* If the number exceeds single digits, like '14', we markdown the right number,
* '4', and carry the remaining number to the left, in this case '1'. This '1' is
* then added onto the addition of values in this column and the process is repeated
* until all columns have been added. This will give us the correct addition.
*
* In our example, we add the numbers in the 1s column, which is (7 + 5 = 12). We
* markdown 2 and carry the 1 to the 10s column. Second, we add (1 + 1 + 9 = 11).
* We markdown 1 and carry the 1 to the 100s column. Third and finally, we add
* (1 + 6 + 2 = 9). So our result becomes 912. Simple right...
*
* If we are adding numbers where some columns only have a single values, then these
* get added normally. For example:
*
*       6 1 7
*   + 2 2 9 5
*   ---------
*     2 9 1 2
*
* Notice that our bottom number is 1 digit longer than our top number. We have a
* '2' in the 1000s column. We use the same system to calculate this value but we
* essentially have a '0' in this column for the top number. So, (0 + 2 = 2).
*
* It's also possible in some instances that we need to carry our final value over.
* For example:
*
*     6 1 7
*   + 5 9 5
*   -------
*   1 2 1 2
*
* Notice that we carry a '1' from the 100s column to calculate our final sum.
*
* Knowing this long addition process, we can build out our solution... We can break
* this into 3 steps:
*
* - 'matched' values; columns with 2 values
* - 'single' values; columns with 1 value
* - last remainder; if final remainder is above 0
*
* Time: O(n)
* Space: O(log n)
*
* Our time complexity is O(n), where (n) is the total nodes in l1 + l2. Our space
* complexity will be O(log n) as we need to return a new list, which will be about
* half the nodes of (n).
*
* @param {object} l1 linked list
* @param {object} l2 linked list
* @return {number} returns the sum of list1 and list2
*/

function sumLists(l1, l2) {
  const results = new LinkedList();
  let node1 = l1.head;
  let node2 = l2.head;
  let carry = 0;
  let sum;

  // matched values:
  // iterate while we have both values in columns
  while (node1 && node2) {

    // add up values and carry
    sum = node1.value + node2.value + carry;

    // check for carry value
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    // add sum to result list
    results.add(sum, results.length);

    // keep iterating
    node1 = node1.next;
    node2 = node2.next;
  }

  // single values:
  // get any remaining values
  let node = node1 || node2;

  // iterate remaining values
  while (node) {
    sum = node.value + carry;

    // check for carry
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    // add to sum and look for next single value
    results.add(sum, results.length);
    node = node.next;
  }

  // check for any last remainder
  if (carry > 0) results.add(carry, results.length);

  return results;
}

export default sumLists;
