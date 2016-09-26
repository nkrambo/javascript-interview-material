
/**
 * red-black Tree
 *
 * A red–black tree is a kind of self-balancing binary search tree.
 * Each node of the tree is 'painted' with either red or black, in a way that satisfies certain properties.
 * These properties collectively constrain how unbalanced the tree can become in the worst case, ultimately
 * preserving tree balance.
 *
 * When the tree is modified, it gets 'repainted', which is quite efficient.
 *
 * Searching O(log n)
 * Insert O(log n)
 * Deletion O(log n)
 *
 * Properties
 * 1. A node is either red or black.
 * 2. The root is black.
 * 3. All leaves (NIL) are black.
 * 4. If a node is red, then both its children are black.
 *
 * These constraints enforce a critical property of red–black trees:
 * The path from the root to the farthest leaf is no more than twice as
 * long as the path from the root to the nearest leaf. The result is that the tree is roughly height-balanced.
 *
 * The shortest possible path has all black nodes (called the 'black height'),
 * and the longest possible path alternates between red and black nodes.
 *
 * Red–black trees offer worst-case guarantees for insertion time, deletion time, and search time.
 * This make them valuable in time-sensitive applications such as real-time applications.
 */

class RedBlackTree {

}

export default RedBlackTree;
