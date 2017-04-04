
/**
* Intersection
*
* Given two (singly) linked lists, determine if the two lists intersect. Return
* the intersecting node. Note that the intersection is defined based on reference,
* not value. That is, if the kth node of the first list is the exact same node
* (by reference) as the jth node of the second linked list, then they are intersecting.
*/

/**
* intersection()
*
* Solution:
*
* Let's draw a picture of intersecting linked lists to get a better feel for what's
* going on.
*
* Here's a picture of intersecting linked lists:
*
*     3 -> 1 -> 5 -> 9
*                    |
*                    7 -> 2 -> 1
*                    |
*               4 -> 6
*
* And here is are non-intersecting linked lists:
*
*     3 -> 1 -> 5 -> 9 -> 7 -> 2 -> 1
*
*               4 -> 6 -> 7 -> 2 -> 1
*
* We should be careful here not to inadvertently draw a special case by making
* the linked lists the same length.
*
* How would we detect if two lists intersect? One approach would be to use a hash
* table and just throw all the linked list nodes into there. We would need to be
* careful to reference the linked lists by their memory allocation, not by their
* value.
*
* There's an easier way though. Observe that two intersecting linked lists will
* always have the same last node. Therefore, we can just traverse to the end of
* each linked list and compare the last nodes.
*
* How do we find where the intersection is, though?
*
* One thought is that we could traverse backwards though each linked list. When
* the linked lists 'split', that's the intersection. Of course, you can't really
* traverse backwards through a singly-linked list however.
*
* If the linked lists were the same length, you could just traverse through them
* at the same time. When they collide, that's your intersection.
*
* When they're not the same length, we'd like to just 'chop off', or ignore, those
* excess (wrapped in curly braces) nodes.
*
*   {3} -> {1} -> 5 -> 9
*                      |
*                      7 -> 2 -> 1
*                      |
*                 4 -> 6
*
* How can we do this? Well, if we know the length of the linked lists, then the
* difference between those two linked lists will tell us how much to 'chop off'.
*
* We can get the lengths at the same time as we get the tails of the linked lists,
* which is the first step we do to determine if there's an intersection.
*
* Putting it all together...
*
* We now have a multistep process.
*
* 1. Run though each linked list to get the lengths and the tails.
*
* 2. Compare the tails. If they are different (by reference, not value), return
*    immediately. There is no intersection.
*
* 3. Set two pointers at the start of each linked list.
*
* 4. On the longer list, advance its pointer by the difference in lengths.
*
* 5. Now, traverse on each linked list until the pointers are the same.
*
* Time: O(A + B)
* Space: O(1)
*
* Where A and B are the lengths of the linked lists.
*
* @param {object} l1 linked list
* @param {object} l2 linked list
* @return {object} returns the intersecting node of list1 and list2, otherwise null.
*/

function intersection(l1, l2) {
  if (l1 === null || l2 === null) return null;

  // if tails do not match, no intersection
  if (getTail(l1) !== getTail(l2)) return null;

  // set pointers to start of each list
  let shorter = l1.length < l2.length ? l1.head : l2.head;
  let longer = l1.length < l2.length ? l2.head : l1.head;

  // advance the pointer for the longer list by diff in sizes
  longer = getKthNode(longer, Math.abs(l1.length - l2.length));

  // move pointers until you have a collision
  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  // return either one
  return longer;
}

function getKthNode(list, k) {
  let current = list;
  let i = 0;

  while (i < k) {
    current = current.next;
    i += 1;
  }

  return current;
}

function getTail(list) {
  if (list === null) return null;

  let current = list.head;
  while (current.next !== null) {
    current = current.next;
  }

  return current;
}

export default intersection;
