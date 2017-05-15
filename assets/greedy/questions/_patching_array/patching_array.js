
/**
* Patching Array
*
* Given a sorted positive integer array nums and an integer n, add/patch elements
* to the array such that any number in range [1, n] inclusive can be formed by
* the sum of some elements in the array. Return the minimum number of patches required.
*
* Example:
* Input: [1, 3], 6
* Output: 1
*
* Combinations of nums are [1], [3], [1, 3], which form possible sums of: 1, 3, 4.
* Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1, 3], [2, 3], [1 ,2 , 3].
* Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
* So we only need 1 patch.
*
* Example:
* Input: [1, 5, 10], 20
* Output: 2
* The two patches can be [2, 4].
*
* Example:
* Input: [1, 2, 2], 5
* Output: 0
*/

/**
* minPatches()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {array} nums
* @param {number} n
* @return {number} return
*/

// function minPatches(nums, n) {
//
// }
//
// export default minPatches;
