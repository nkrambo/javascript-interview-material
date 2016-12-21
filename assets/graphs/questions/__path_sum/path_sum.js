
/**
* Paths with Sum
*
* You are given a binary tree in which each node contains an integer value
* (which might be positive or negative). Design an algorithm to count the
* number of paths that sum to a given value. The path does not need to start
* or end at the root or a leaf, but it must go downwards (traveling only from
* the parent nodes to the child nodes).
*/

/**
* pathSumBrute()
*
* Solution:
*
* Let's pick a potential sum, say 8, and then draw a binary tree based on this.
* This tree intentionally has a number of paths with this sum.
*
*                  10
*               ↙     ↘
*             5         -3
*          ↙    ↘          ↘
*        3        2          11
*      ↙   ↘        ↘
*    3      -2        1
*
* In a brute force approach, we just look at all possible paths. To do this, we
* traverse tp each node. At each node, we recursively try all paths downwards,
* tracking the sum as we go. As soon as we hit our target sum, we increment the
* total.
*
* Time: O(n log n)
* Space: O(1)
*
* The complexity of this algorithm is tricky.
*
* Consider that node at depth 'd' will be 'touched' (via countPaths()) by 'd' nodes
* above it. In a balanced bonary tree, 'd' will be no more than approximately (log n).
* Therefore, we know that with 'n' nodes in the tree, countPaths() will be called
* O(n log n) times.
*
* In an unbalanced tree, the runtime could be much worse. Consider a tree that is
* a straight line down. At the root, we traverse to (n - 1) nodes. At the next
* level (with just a single node), we traverse  to (n - 2) nodes, and so on. This
* leads us to the sum of numbers between 1 and n, which is O(n^2).
*
* @param {object} root binary tree node
* @param {number} target value path should sum to
* @return {number} returns the number of paths that sum to target, or -1
*/

function pathSumBrute(root, target) {
  if (root === null) return 0;

  // count paths with sum starting from root
  const pathsFromRoot = countPaths(root, target, 0);

  // try nodes on the left and right
  const pathOnLeft = pathSumBrute(root.left, target);
  const pathOnRight = pathSumBrute(root.right, target);

  return pathsFromRoot + pathOnLeft + pathOnRight;
}

/**
* countPaths()
*
* @param {object} node binary tree node
* @param {number} target value path should sum to
* @param {number} currentSum current sum of path
* @return {number} returns the number of paths that sum to target, or -1
*/

function countPaths(node, target, currentSum) {
  if (node === null) return 0;

  currentSum += node.value;
  let totalPaths = 0;

  // found a path from root
  if (currentSum === target) totalPaths += 1;

  // recurse left and right
  totalPaths += countPaths(node.left, target, currentSum);
  totalPaths += countPaths(node.right, target, currentSum);

  return totalPaths;
}

/**
* pathSum()
*
* Solution:
*
* In analyzing the last solution, we may realise that we repeat some work. For a
* path such as 10 -> 5 -> 3 -> -2, we traverse this path (or parts of it) repeatedly.
* We do it when we start with node 10, then when we go to node 5 (looking at 5, then 3,
* then -2), then when we go to node 3, and then finally when we go to node -2.
* Ideally, we'd like to resue this work.
*
*                  10
*               ↙     ↘
*             5         -3
*          ↙    ↘          ↘
*        3        2          11
*      ↙   ↘        ↘
*    3      -2        1
*
* Let's isolate a given path and treat it as just an array. Consider a (hypothetical,
* extended) path like:
*
* 10 -> 5 -> 1 -> 2 -> -1 -> -1 -> 7 -> 1 -> 2
*
* What we're really saying is: How many contiguous subsequences in this array sum
* to a target sum such as 8? In other words, for each y, we're trying to find the
* x values below. (Or, more accurately, the number of x values below).
*
*                 targetSum
*               ______|______
*     __________|___________|
*    s          x           y
*
* If each value knows its running sum (the sum of values from s through itself),
* then we can find this pretty easily. We just need to leverage this simple equation:
*
* runningSum(x) = runningSum(y) - targetSum
*
* We then look for the values of x where this is true.
*
*           runningSum(y)
*            ____|____
*           |         |
*    runningSum(x)  targetSum
*      _____|_________|______
*     |__________|___________|
*     s          x           y
*
* Since we're just looking for the number of paths, we can use a Map(). As
* we iterate through the array, we map runningSum to the number of times we've
* seen that sum. Then, for each y, look up runningSum(y) - targetSum in the map.
* The value in the map will us the number of paths with targetSum that end at y.
*
* For example:
*
* index:  0    1    2     3     4     5     6     7     8
* --------------------------------------------------------
* value: 10 -> 5 -> 1 ->  2 -> -1 -> -1 ->  7 ->  1 ->  2
* sum:   10   15   16    18    17    16    23    24    26
*
*/

function pathSum() {

}

export { pathSumBrute, pathSum };
