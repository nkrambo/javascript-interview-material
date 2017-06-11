
/**
* Course Schedule
*
* Tags: Topological Sort, Graph, DFS, BFS
* Leetcode: 207
*
* There are a total of n courses you have to take, labeled from 0 to n - 1.
*
* Some courses may have prerequisites, for example to take course 0 you have to
* first take course 1, which is expressed as a pair: [0, 1]
*
* Given the total number of courses and a list of prerequisite pairs, is it possible
* for you to finish all courses?
*
* Example 1:
*
* Given 2, [[1, 0]]
* Return true
*
* There are a total of 2 courses to take. To take course 1 you should have finished
* course 0. So it is possible.
*
* Example 2:
*
* Given 2, [[1, 0], [0, 1]]
* Return false
*
* There are a total of 2 courses to take. To take course 1 you should have finished
* course 0, and to take course 0 you should also have finished course 1. So it is
* impossible.
*
* Note:
*
* 1. The input prerequisites is a graph represented by a list of edges, not adjacency
*    matrices
*
* 2. You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
* canFinish()
*
* Solution:
*
*
* Time: O(1)
* Space: O(1)
*
* @param {number} numCourses total number of courses
* @param {array} prerequisites expressed as pairs
* @return {boolean} returns true if its possible to finish the course schedule, otherwise false
*/

// function canFinish(numCourses, prerequisites) {
//
// }
//
// export default canFinish;
