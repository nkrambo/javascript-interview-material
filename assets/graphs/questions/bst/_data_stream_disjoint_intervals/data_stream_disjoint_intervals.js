
/**
* Data Stream as Disjoint Intervals
*
* Tags: BST
* Leetcode: 352
*
* Given a data stream input of non-negative integers a1, a2, ..., an, ...,
* summarize the numbers seen so far as a list of disjoint intervals.
*
* For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ...,
* then the summary will be:
*
* [1, 1]
* [1, 1], [3, 3]
* [1, 1], [3, 3], [7, 7]
* [1, 3], [7, 7]
* [1, 3], [6, 7]
*
* Follow up:
*
* What if there are lots of merges and the number of disjoint intervals are small
* compared to the data stream's size?
*/

/**
* Definition for an interval.
*
* struct Interval {
*     int start;
*     int end;
*     Interval() : start(0), end(0) {}
*     Interval(int s, int e) : start(s), end(e) {}
* };
*/

/**
* Solution:
*
* https://leetcode.com/problems/data-stream-as-disjoint-intervals/#/solutions
*
* Time: O(1)
* Space: O(1)
*/

// class SummaryRanges {
//
// }
//
// export default SummaryRanges;
