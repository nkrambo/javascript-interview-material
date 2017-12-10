
/**
* Copy List with Random Pointer
*
* Tags: Hash Table, Linked Lists
* Leetcode: 138
*
* A linked list is given such that each node contains an additional random pointer
* which could point to any node in the list or null.
*
* Return a deep copy of the list.
*/

/**
* Definition for singly-linked list with a random pointer.
*
* @constructor
* @param {*} label
* @return {object}
*/

function RandomListNode(label) {
  this.label = label;
  this.random = null;
  this.next = this.random;
}

/**
* copyRandomList()
*
* Solution:
*
* An intuitive solution is to keep a hash table for each node in the list, via
* which we just need to iterate the list in 2 rounds respectively to create nodes
* and assign the values for their random pointers. As a result, the space complexity
* of this solution is O(N), although with a linear time complexity.
*
* As an optimised solution, we could reduce the space complexity into constant.
* The idea is to associate the original node with its copy node in a single linked
* list. In this way, we don't need extra space to keep track of the new nodes.
*
* The algorithm is composed of the follow three steps which are also 3 iteration
* rounds.
*
* 1. Iterate the original list and duplicate each node. The duplicate of each node
*    follows its original immediately.
*
* 2. Iterate the new list and assign the random pointer for each duplicated node.
*
* 3. Restore the original list and extract the duplicated nodes.
*
* The algorithm is implemented as follows:
*
* Time: O(n)
* Space: O(1)
*
* @param {RandomListNode} head
* @return {RandomListNode}
*/

function copyRandomList(head) {
  let iter = head;
  let next;

  // First round: make copy of each node, and link them together side-by-side in a single list.
  while (iter !== null) {
    next = iter.next;

    const copy = new RandomListNode(iter.label);
    iter.next = copy;
    copy.next = next;

    iter = next;
  }

  // Second round: assign random pointers for the copy nodes.
  iter = head;
  while (iter !== null) {
    if (iter.random !== null) {
      iter.next.random = iter.random.next;
    }

    iter = iter.next.next;
  }

  // Third round: restore the original list, and extract the copy list.
  iter = head;
  const sentinel = new RandomListNode(0);
  let copy;
  let copyIter = sentinel;

  while (iter !== null) {
    next = iter.next.next;

    // extract the copy
    copy = iter.next;
    copyIter.next = copy;
    copyIter = copy;

    // restore the original list
    iter.next = next;

    iter = next;
  }

  return sentinel.next;
}

export default copyRandomList;
