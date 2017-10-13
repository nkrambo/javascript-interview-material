
/**
* Intersection of Two Linked Lists
*
* Tags: Linked List
* Leetcode: 160
*
* Write a program to find the node at which the intersection of two singly linked lists begins.
*
* Example:
*
*   A:          a1 → a2
*                       ↘
*                         c1 → c2 → c3
*                       ↗
*   B:     b1 → b2 → b3
*
* Intersecting node is c1
*
* Notes:
*
* 1. If the two linked lists have no intersection at all, return null.
*
* 2. The linked lists must retain their original structure after the function returns.
*
* 3. You may assume there are no cycles anywhere in the entire linked structure.
*
* 4. Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
* Definition for singly-linked list.
*
* function ListNode(val) {
*   this.val = val;
*   this.next = null;
* }
*/

/**
* getIntersectionNode()
*
* Solution:
*
* Let's draw a picture of intersecting linked lists to get a better feel for what's
* going on.
*
* Here's a picture of intersecting linked lists:
*
*     3 → 1 → 5 → 9
*                   ↘
*                    7 → 2 → 1
*                   ↗
*             4 → 6
*
* And here is are non-intersecting linked lists:
*
*     3 → 1 → 5 → 9 → 7 → 2 → 1
*
*               4 → 6 → 7 → 2 → 1
*
* We should be careful here not to inadvertently draw a special case by making
* the linked lists the same length.
*
* How would we detect if two lists intersect?
*
* The brute force approach would be to, for each node a(i) in list A, traverse
* the entire list B and check if any node in list B coincides with a(i).
*
* This would give us:
*
* Time complexity : O(mn).
* Space complexity : O(1).
*
* That's not a very good time complexity.
*
* Another approach would be to use a hash table and just throw all the linked list
* nodes into there. We traverse list A and store the address/reference to each
* node in a hash set. Then check every node b(i) in list B: if b(i) appears in the
* hash set, then b(i) is the intersection node.
*
* We would need to be careful to reference the linked lists by their memory allocation,
* not by their value.
*
* This would give us:
*
* Time complexity : O(m+n).
* Space complexity : O(m) or O(n)
*
* We can do better than that.
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
*   {3} → {1} → 5 → 9
*                     ↘
*                      7 → 2 → 1
*                     ↗
*               4 → 6
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
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode}
*/

function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) return null;

  // if tails do not match, no intersection
  if (getTail(headA) !== getTail(headB)) return null;

  const aLength = getLength(headA);
  const bLength = getLength(headB);

  // set pointers to start of each list
  let shorter = aLength < bLength ? headA : headB;
  let longer = aLength < bLength ? headB : headA;

  // advance the pointer for the longer list by diff in sizes
  longer = getKthNode(longer, Math.abs(aLength - bLength));

  // move pointers until you have a collision
  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  // return either one
  return longer;
}

function getKthNode(head, k) {
  let current = head;
  let i = 0;

  while (i < k) {
    current = current.next;
    i += 1;
  }

  return current;
}

function getTail(head) {
  if (head === null) return null;

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  return current;
}

function getLength(head) {
  if (head === null) return null;

  let count = 1; // count the root node
  let current = head;
  while (current.next !== null) {
    count += 1;
    current = current.next;
  }

  return count;
}

/**
* getIntersectionNodePointers()
*
* Solution:
*
* The above answer is pretty good, but it's quite a bit of code.
*
* There is actually an approach that doesn't need to pre-process the lists to get
* the difference in length.
*
* Actually we don't care about the "value" of difference, we just want to make
* sure two pointers reach the intersection node at the same time.
*
* We can use two iterations to do that.
*
* In the first iteration, we will reset the pointer of one linkedlist to the head
* of another linkedlist after it reaches the tail node.
*
* In the second iteration, we will move two pointers until they point to the
* same node. Our operations in the first iteration will help us counteract the difference.
*
* So... if two lists intersect, the meeting point in second iteration must
* be the intersection point. If the two lists have no intersection at all,
* then the * meeting pointer in second iteration must be the tail node of both
* lists, which is null.
*
* Time: O(A + B)
* Space: O(1)
*
* Where A and B are the lengths of the linked lists.
*
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode}
*/

function getIntersectionNodePointers(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  if (p1 === null || p2 === null) return null;

  while (p1 !== null && p2 !== null && p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;

    // any time pointers collide or reach end together without colliding, then return any one of the pointers.
    if (p1 === p2) return p1;

    // 1. if one of them reaches the end earlier then reuse it by moving it to the beginning of other list.
    // 2. once both of them go through reassigning, they will be equidistant from the collision point.
    if (p1 === null) p1 = headB;
    if (p2 === null) p2 = headA;
  }

  return p1;
}

export { getIntersectionNode, getIntersectionNodePointers };
