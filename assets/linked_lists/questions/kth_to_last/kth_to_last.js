
/**
* Kth to Last
*
* Tags: Two Pointer
*
* You have a linked list and want to find the kth to last node.
*
* Write a function kthToLast() that takes an integer k and the headNode of a
* singly linked list, and returns the kth to last node in the list.
*
* For example:
*
* function LinkedListNode(value) {
*   this.value = value;
*   this.next = null;
* }
*
* let a = new LinkedListNode("Angel Food");
* let b = new LinkedListNode("Bundt");
* let c = new LinkedListNode("Cheese");
* let d = new LinkedListNode("Devil's Food");
* let e = new LinkedListNode("Eccles");
*
* a.next = b;
* b.next = c;
* c.next = d;
* d.next = e;
*
* kthToLast(2, a);
* // returns the node with value "Devil's Food" (the 2nd to last node)
*
*/

/**
* kthToLast()
*
* Solution:
*
* It might be tempting to iterate through the list until we reach the end and then
* walk backwards k nodes. But we have a singly linked list! We can't go backwards.
*
* If we had the length of the list, we could calculate how far to walk, starting
* from the head, to reach the kth to last node.
*
* If the list is n nodes, the kth node is (n - k).
*
* Well, we don't have the length but we could calculate it easily. We just iterate
* from head to tail and count the nodes.
*
* It takes n steps to count the length of the list and then another n - k, steps to
* reach the kth node. In the worst case, k = 0; so we have to walk the entire list
* length again, meaning our time would be O(2n), which is O(n).
*
* If we use a 'two pointer' approach we can calculate the kth node in one pass.
* That is, we maintain a k-wide 'block' by:
*
* 1. Walk one pointer k nodes from the head (rightNode).
*
* 2. Put another pointer at the head (leftNode).
*
* 3. Walk both pointers, at the same speed, towards the tail. This keeps a distance
*    of k between them.
*
* 4. When rightNode hits the tail, leftNode is on the target (since it's k nodes
*    from the end of the list).
*
* However, this would still result in the same runtime and space complexity and
* take the same amount of steps in each approach.
*
* In the first approach, we walk one pointer from head to tail (to get the list's length),
* then walk another pointer from the head node to the target node (the kth to last node).
*
* In the second approach, rightNode also walks all the way from head to tail, and
* leftNode also walks from the head to the target node.
*
* So in both cases we have two pointers taking the same steps through our list.
* The only difference is the order in which the steps are taken. The number of
* steps is the same either way.
*
* For simplicity's sake, we'll implement the first approach.
*
* Time: O(n)
* Space: O(1)
*
* @param {number} k integer position from last node
* @param {object} head head node of singly-linked
* @return {object} returns list node at kth position from last node
*/

function kthToLast(k, head) {

  if (k < 1) {
    throw new Error('Impossible to find less than first to last node: ' + k);
  }

  // STEP 1: get the length of the list
  // start at 1, not 0, else we'd fail to count the head node!
  // traverse the whole list, counting all the nodes
  let length = 1;
  let current = head;
  
  while (current.next) {
    current = current.next;
    length += 1;
  }

  // if k is greater than the length of the list, there can't
  // be a kth-to-last node, so we'll return an error!
  if (k > length) {
    throw new Error('k is larger than the length of the linked list: ' + k);
  }

  // STEP 2: walk to the target node
  // calculate how far to go, from the head,
  // to get to the kth to last node
  let toGo = length - k;
  current = head;

  while (toGo > 0) {
    current = current.next;
    toGo -= 1;
  }

  return current;
}

export default kthToLast;
