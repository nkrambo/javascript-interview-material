
/**
* Insert Interval
*
* Tags: Array, Sort
* Leetcode: 57
*
* Given a set of non-overlapping intervals, insert a new interval into the intervals
* (merge if necessary).
*
* You may assume that the intervals were initially sorted according to their
* start times.
*
* Example 1:
*
* Given: [1, 3], [6, 9], insert [2, 5]
* Return: [1, 5], [6, 9]
*
* Example 2:
*
* Given: [1, 2], [3, 5], [6, 7], [8, 10], [12, 16], insert [4, 9]
* Return: [1, 2], [3, 10], [12, 16]
* This is because the new interval [4, 9] overlaps with [3, 5], [6, 7], [8, 10].
*/

/**
* Definition for an interval.
*
* function Interval(start, end) {
*   this.start = start;
*   this.end = end;
* }
*/

/**
* insert()
*
* Solution:
*
* Time: O(n)
* Space: O(n)
*
* @param {array} intervals
* @param {array} newInterval
* @return {array} returns a merged interval
*/

// function insert(intervals, newInterval) {
//
// }
//
// export default insert;
