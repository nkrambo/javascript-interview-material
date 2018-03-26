
/**
* red-black Tree
*
* A red–black tree is a kind of self-balancing binary search tree. Each node of
* the tree is 'painted' with either red or black, in a way that satisfies certain
* properties. These properties collectively constrain how unbalanced the tree
* can become in the worst case, ultimately preserving tree balance.
*
* When the tree is modified, it gets 'repainted', which is quite efficient.
*
* Search: O(log n)
* Insert: O(log n)
* Delete: O(log n)
*
* Rules:
*
* 1. A node is either red or black.
* 2. The root is black.
* 3. All leaves (NIL) are black.
* 4. If a node is red, then both its children are black.
*
* These constraints enforce a critical property of red–black trees:
*
* 1. The path from the root to the farthest leaf is no more than twice as long
*    as the path from the root to the nearest leaf. The result is that the tree
*    is roughly height-balanced.
*
* 2. The shortest possible path has all black nodes (called the 'black height'),
*    and the longest possible path alternates between red and black nodes.
*
* It should be noted that all nodes are inserted as red nodes.
*
* Red–black trees offer worst-case guarantees for insertion time, deletion time,
* and search time. This make them valuable in time-sensitive applications such
* as real-time applications.
*
* The upper bound on the height allows red–black trees to be efficient in the
* worst case, unlike ordinary binary search trees.
*
* red-black trees are generally favourable over AVL trees for a self-balancing
* solution.
*
* Example:
*
*                  B
*               ↙
*             B               Invalid
*           ↙
*         B
*
* Example:
*
*                  B
*               ↙     ↘
*             R         B     Valid
*           ↙   ↘     ↙
*         B      B  R
*
* Example:
*
*                  B
*               ↙
*             R               Invalid
*               ↘
*                 B
*
* Remeber that red-black trees are just a modified BST, so we have mostly the same
* operations but we to additional information on the color of the node, and also to
* define some helper functions to quickly access the color of a node(grandparent's
* other child) as well as see details and manipulate it's color.
*
* Let's step through our operations:
*
* 1. SEARCH
*
* The search operation remains the same as a normal BST, this makes sense as we're
* only modifying the tree to self-balance, so retrieval shouldn't be impacted.
*
* 2. INSERT
*
* Insertion into the tree starts as a normal insertion, where it finds the correct
* place to insert.
*
* The new node will always start off as a red node, but it must be recolored based
* on the rules of a red and black tree. Specifically, there are 5 cases which must
* be addressed when repainting the node.
*
* 1. The node is the root of the tree, in which case paint it black.
*
* 2. If the parent is black, then leave the node as is.
*
* 3. If the parent is red and the uncle is red, then repaint them both black, and
*    repaint the grandparent red. In this case, the grandparent might violate
*    some of the rules, for example if its parent is red. Thus, repaint the
*    grandparent as if it was being inserted.
*
* 4. If the parent is red and the uncle is black(must be true because the previous
*    case was not true), rotate the inserted node up, so that it now sits atop
*    the parent. This will still leave both of these nodes red, violating the rule
*    that every red must have two black children. This case will always continue
*    to case five, where that issue will be resolved.
*
* 5. This case has the same scenario as the previous case, but here paint the
*    inserted node's grandparent black, and its parent red. Then(because of the
*    guarantee that this is the left child if the parent is a left or vice-versa
*    for right from the previous case) rotate the parent up and the grandparent down.
*
* 3. REMOVAL
*
* Removal in a red black tree also requires coloring. Repainting in removal only
* considers the case of at most one child, because if it has two children, its
* value is swapped with the minimum value of its right sub-tree or the maximum of
* the left sub-tree and remove the swapped value from the sub-tree. A swap does
* not violate any of the rules of the red black tree, so there will be only cases
* where there is one or no children.
*
* Similar to insertion, there are multiple cases to be examined when removing a node.
*
* Base case:
*
* We have a base case called once when starting to remove values, and is not
* included in any recursive calls. If the removed node is red, or the child is red,
* then paint the child red and remove the node because no rules will be violated
* when it is removed.
*
* All subsequent cases therefore are guaranteed that the removed node is black.
*
* 1. If the removed node is the root, then remove the value and ensure that it is black.
*
* 2. If the removed node's sibling is red, paint the parent red and the sibling
*    black. Then, rotate the parent down and the sibling up, such that parent is
*    still above the removed node. Now, the path that the removed node is on will
*    be short one black node, so this case always continue to case three.
*
* 3. If the removed node's sibling is black, then repaint the sibling red. This
*    has the effect of reducing the number of black nodes on paths through the
*    sibling to be reduced by one. When the node to be removed is removed, this
*    will balance both sides of the parent to have the same number of black nodes.
*    This still has the issue of paths which don't pass through the parent will
*    have one greater black node. By recursively call painting on the parent, the
*    issue is fixed.
*
* 4. If the removed node's sibling is black and the parent is red, then swap the
*    sibling and the parent's colors. This makes it such the black nodes on paths
*    through the sibling will remain the same, but the number of black nodes on
*    the path through the removed node will increase by one, and then decrease by
*    one when the node is removed.
*
* 5. If the removed node's sibling is the right child, black, its left child is
*    red, and the other is black (or vice-versa for directions), rotate the sibling
*    right, and swap its color with the left child. This sets us up for sixth case,
*    where the sibling is black, and its right child is red(if the sibling is a
*    right child).
*
* 6. If the removed node's sibling is the right child, black, its right child is
*   red, rotate the parent left, and swap the sibling and the parent's color. Then,
*   paint the sibling(the new parent) black. That rotation added an extra black
*   node to the path which the removed node was on, and retained the original color
*   of the parent, ensuring all properties were retained.
*/

// https://medium.com/@julianknodt/red-black-trees-in-javascript-c20eec1d5d1c

class RedBlackTree {
  constructor() {
    this.root = null;
    this.color = {
      RED,
      BLACK,
    };
  }

  /**
   * Add value associated with a given key.
   * Complexity: O(log N).
   *
   * @param {Numbeterr} key Key.
   * @param {Object} value Value.
   */

  insert(key, value) {
    this._root = this._put(key, value, this._root);
    this._root.setColor(this_colors.BLACK);
  }

  // /**
  //  * Returns true or false depending on whether
  //  * given node is red.
  //  *
  //  * @private
  //  * @method
  //  * @param {Node} node Node which sould be checked.
  //  * @return Returns true if node is red.
  //  */
  //
  // isRed(node) {
  //   if (!node) return false;
  //   return node.isRed();
  // };
}

export default RedBlackTree;
