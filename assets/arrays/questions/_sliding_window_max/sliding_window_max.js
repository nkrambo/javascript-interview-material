
// http://www.cnblogs.com/Liok3187/p/4657526.html
//
// https://www.youtube.com/watch?v=ohHWQf1HDfU
//
// https://www.youtube.com/watch?v=86CQq3pKSUw
//
// https://www.youtube.com/watch?v=39grPZtywyQ


/**
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].
Note:
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.
Follow up:
Could you solve it in linear time?
Hint:
How about using a data structure such as deque (double-ended queue)?
The queue size need not be the same as the window’s size.
Remove redundant elements and the queue should store only elements that need to be considered.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Maintain an array for possible maximum value's index between [i - k + 1, i]
 */
// var maxSlidingWindow = function(nums, k) {
//     var result = [],
//         queue = [],
//         len = nums.length,
//         i;
//
//     if (k > len || k === 0) {
//         return result;
//     }
//
//     for (i = 0; i < len; i++) {
//         while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
//             queue.pop();
//         }
//
//         if (queue[0] < i - k + 1) {
//             queue.shift();
//         }
//
//         queue.push(i);
//
//         if (i >= k - 1) {
//             result.push(nums[queue[0]]);
//         }
//     }
//
//     return result;
// };
