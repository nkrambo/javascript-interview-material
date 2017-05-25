
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
* Red–black trees offer worst-case guarantees for insertion time, deletion time,
* and search time. This make them valuable in time-sensitive applications such
* as real-time applications.
*
* Red-black trees are generally favourable over AVL trees for a self-balancing
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
*/

// class RedBlackTree {
//
//   /**
//    * Red-Black Tree.
//    *
//    * @public
//    * @constructor
//    */
//
//   constructor() {
//     this.root = null;
//     this.color = {
//       RED,
//       BLACK
//     };
//   }
//
//   /**
//    * Add value associated with a given key.
//    * Complexity: O(log N).
//    *
//    * @public
//    * @method
//    * @param {Numbeterr} key Key.
//    * @param {Object} value Value.
//    */
//
//    insert(key, value) {
//      this._root = this._put(key, value, this._root);
//      this._root.setColor(this_colors.BLACK);
//    };
//
//   // /**
//   //  * Returns true or false depending on whether
//   //  * given node is red.
//   //  *
//   //  * @private
//   //  * @method
//   //  * @param {Node} node Node which sould be checked.
//   //  * @return Returns true if node is red.
//   //  */
//   //
//   // isRed(node) {
//   //   if (!node) return false;
//   //   return node.isRed();
//   // };
//
// }
//
// export default RedBlackTree;
