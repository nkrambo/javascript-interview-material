
/**
* Random Node
*
* Tags: BST
*
* Design and implement an algorithm which returns a random node from a binary
* search tree class. All nodes should be equally likely to be chosen.
*
* Solution:
*
* We could do something like keep an array of nodes and randomly select from here.
* However, then we have to track inserts, deletes etc... in O(n) time and O(n)
* space, where n is the number of nodes in the tree.
*
* We can do better...
*
* What about if we generated a random number between 0 and (n - 1) and used that
* as the index in a in-order DFS to return a node randomly. For example, in the
* below BST we have 9 nodes. The number at each node represents its index in a
* zero-based scheme going left to right, or in-order, like that in a DFS. We can
* generate a random number (index) between 0 - 8, as we have 9 nodes, then use
* that to return the node at that index.
*
*                  5
*               ↙     ↘
*             3         7
*           ↙  ↘      ↙   ↘
*         1     4    6     8
*       ↙  ↘
*     0     2
*
* That would work, but we are still getting a runtime of O(n). We're dealing with
* a BST, so I'm thinking we could get a (log n) runtime.
*
* We could traverse randomly down the tree. The hard part with this approach is
* making sure that the probabilites of choosing each node are the same. Essentially,
* we need to return each random node with 1/n probability, n being the number of
* nodes in the tree.
*
* This get's a little tricky because whether we should randomly traverse left or
* right at each node is not 50/50. Even in a balanced tree, the number of nodes
* on each side might not be equal.
*
* When you think about it, the odds of picking something from either the left or
* right branch must be the sum of each probability. That is for example, the odds
* of going left should be LEFT_SIZE * 1/n, same for the right.
*
* This means that, at each node, we must know the number children of the left and
* right. We can track this information on our class insert and delete methods,
* with a '.children' property on each node.
*
* Let's look at another example. Consider the following BST.
*
*                  4
*               ↙     ↘
*             2         6
*           ↙  ↘      ↙   ↘
*         1     3    5     7
*
* If we were to mark each node with a 'children' property, then our tree would
* look something like this.
*
* 4.children = 6
* 2.children = 2
* 6.children = 2
*
* So how is this useful? We'll if we want to select randomly with equal probability
* of selecting any other node, we can use this property to our advantage. If we
* know that 4 (root) has 6 children, then the probability we should return this
* node is 1/7. Likewise, the probability that we should return the node 2 or any
* of its children is 3/7.
*
* Putting it all together then...
*
* We can combine our approach of randomly generating a number with a zero based
* index and keeping track of the children at each node to give us a solution
* similar to a binary search.
*
* Let's say that we randomly generate the index 2. In our above example this would
* mean that we should return the node value 3. However, remember that traversing
* with an (in-order) DFS gives us an O(n) runtime to reach our index. With children
* properties on each node though, we can traverse in an O(log n) runtime. Here's
* how it works...
*
* If at each node we can calculate what index we're at then we can easily decide
* whether we need to go left or right to get to our destination. Well, it turns
* out this is simple.
*
* Let's start at the root node 4. Remember we're looking for index 2.
*
* The root's left child node is 2 and we know that this has 2 children. Therefore
* we also know that the entire left subtree of our root has 3 children in total.
*
* If we know that we have 3 children in the left subtree then they must account
* for 3 indices right? Yes they do.
*
* So to calculate our current (root) node index we grab the left node's children
* property and add 1, to include that node too.
*
*       2 + 1 = 3
*
*           3
*         ↙   ↘
*    0 - 2     4 - 6
*
* So the index of our current (root) node is 3. Well, we're looking for index 2
* so we know that we must traverse left.
*
* We essentially repeat this process as we traverse, first checking if we have
* found our index and, if not, calculating if we go left or right in constant time.
*
* But think about if we have to traverse right instead of left? We need to update
* our index by pruning those nodes in the left subtree.
*
* Let's use the above tree again but this time we're looking for index 4, which
* will be node 5.
*
* The root node is index 3, 3 !== 4 and 4 > 3 so we traverse right. Our current
* node is now 6 (index: 5).
*
* We prune the entire left subtree and the root node, so now the 0th index is
* updated to node 5, instead of node 1.
*
* index = (index - this.getChildren(current.left)) - 1;
* index = 4 - 3 - 1 = 0
*
* Prune nodes [1, 2, 3, 4]
*
*                 (4)
*               ↙
*            (2)          6
*           ↙  ↘        ↙   ↘
*        (1)    (3)   5       7
*
* So we are left still at node 6 but with an index of 0. We go through again, our
* index is not equal to the children of current.left, that's 1, because the
* getChildren() returns a 0 for null nodes.
*
* We traverse left because our index is not less than 1 and we finally return the
* value at this index, which is 5.
*
* We just cut our search time in half using this method, which is why we can achieve
* our O(log n) runtime and why you can see the similarity to binary search methods
* used with arrays, for instance.
*
* Time: O(log n)
* Space: O(1)
*/

class BSTRandom {
  constructor() {
    this.root = null;
  }

  /**
  * insert()
  *
  * @param {*} value to insert
  * @return {void}
  */

  insert(value) {
    // create node, track size
    const node = {
      value,
      left: null,
      right: null,
      children: null,
    };

    if (this.root === null) {
      this.root = node;
      return;
    }

    // start at root
    let current = this.root;

    while (current) {
      // children bump each node in branch
      current.children += 1;

      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;

      // value === current, cannot insert duplicates
      } else {
        throw new Error('Cannot insert duplicate values');
      }
    }

    return;
  }

  /**
  * getRandomNode()
  *
  * @return {*} returns a random node value
  */

  getRandomNode() {
    // generate random index
    let index = Math.ceil(Math.random() * (this.root.children - 1)); // minus 1 for zero based indexing

    // traverse from root
    let current = this.root;
    while (current) {
      // if we're at index
      if (index === this.getChildren(current.left)) return current.value;

      // if index < current, go left
      if (index < this.getChildren(current.left)) {
        current = current.left;

      // if index > current, go right and subtract left tree and parent node from index
      } else if (index > this.getChildren(current.left)) {
        index = (index - this.getChildren(current.left)) - 1;
        current = current.right;
      }
    }
  }

  /**
  * getChildren()
  *
  * @param {object} node to check for children
  * @return {number} returns the number of children of node
  */

  getChildren(node) {
    if (node === null) return 0;
    return node.children + 1;
  }
}

export default BSTRandom;
