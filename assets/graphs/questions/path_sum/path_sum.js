
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

  // base case
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

  // base case
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
* to a target such as 8? In other words, for each y, we're trying to find the x
* values below. (Or, more accurately, the number of x values below).
*
*                   target
*                _____|_____
*     __________|___________|
*    s          x           y
*
* If each value knows its running sum (the sum of values from s through itself),
* then we can find this pretty easily. We just need to leverage this simple equation:
*
* runningSum(x) = runningSum(y) - target
*
* We then look for the values of x where this is true.
*
*           runningSum(y)
*            ____|____
*           |         |
*    runningSum(x)  target
*      _____|_________|______
*     |__________|___________|
*     s          x           y
*
* Since we're just looking for the number of paths, we can use a Map(). As
* we iterate through the array, we map runningSum to the number of times we've
* seen that sum. Then, for each y, look up runningSum(y) - target in the map.
* The value in the map will us the number of paths with target that end at y.
*
* For example:
*
* index:  0    1    2     3     4     5     6     7     8
* --------------------------------------------------------
* value: 10 -> 5 -> 1 ->  2 -> -1 -> -1 ->  7 ->  1 ->  2
* sum:   10   15   16    18    17    16    23    24    26
*
* The value of runningSum(7) is 24. If the target is 8, then we'd look up 16
* in the map. This would have a value of 2 (originating from index 2 and index 5).
* As we can see above, indices 3 through 7 and indices 6 through 7 have sums of 8.
*
* Now that we've settled the algorithm for an array, let's review this on a tree.
* We take a similar approach.
*
* We traverse through the tree using a DFS. As we visit each node:
*
* 1. Track its runningSum. We'll take this in as a parameter and immediatley
*    increment it by node.value.
*
* 2. Lookup runningSum - target in the map. The value there indicates the total
*    number. Set totalPaths to this value.
*
* 3. If runningSum === target, then there's one additional path that starts at
*    the root. Increment totalPaths.
*
* 4. Add runningSum to the map (incrementing the value already there).
*
* 5. Recurse left and right, counting the number of paths with sum targetSum.
*
* 6. After we're done recursing left and right, decrement the value of runningSum
*    in the map. This is essentially backing out of our work; it reverses the
*    changes to the map so that other nodes don't use it (since we're now done
*    with that node).
*
* Time: O(n)
* Space: O(n)
*
* Where n is the number of nodes in the tree. We know we have a linear runtime
* because we travel to each node just once, doing O(1) work eaach time. In a
* balanced tree, the space complexity is O(log n) due to the hash table. The space
* complexity can grow to O(n) too, in an unbalanced tree.
*
* @param {object} node binary tree node
* @param {number} target value path should sum to
* @return {number} returns the number of paths that sum to target, or -1
*/

function pathSum(node, target) {
  const pathCount = new Map();
  return helper(node, target, 0, pathCount);
}

/**
* helper()
*
* @param {object} node binary tree node
* @param {number} target value path should sum to
* @param {number} runningSum
* @param {map} pathcount
* @return {number} returns the number of paths that sum to target, or -1
*/

function helper(node, target, runningSum, pathCount) {

  // base case
  if (node === null) return 0;

  // count paths with sum ending at the current node
  runningSum += node.value;
  const sum = runningSum - target;

  let totalPaths = pathCount.has(sum) ? pathCount.get(sum) : 0;

  // if runningSum equals target, then one additional path starts at the root
  // add this path
  if (runningSum === target) totalPaths += 1;

  // increment pathCount
  pathCount.set(runningSum, pathCount.get(runningSum) + 1 || 1);

  // recurse left and right
  totalPaths += helper(node.left, target, runningSum, pathCount);
  totalPaths += helper(node.right, target, runningSum, pathCount);

  // decrement pathCount
  if (pathCount.get(runningSum) === 0) {
    pathCount.delete(runningSum);
  } else {
    pathCount.set(runningSum, pathCount.get(runningSum) - 1);
  }

  return totalPaths;
}

export { pathSumBrute, pathSum };
