
/**
* Shuffle an Array
*
* Tags: Fisher-Yates, Knuth Shuffle
* Leetcode: 384
*
* Shuffle a set of numbers without duplicates.
*
* Example:
*
* // Init an array with set 1, 2, and 3.
* int[] nums = {1, 2, 3};
* Solution solution = new Solution(nums);
*
* // Shuffle the array [1, 2, 3] and return its result. Any permutation of [1, 2, 3]
* // must equally likely to be returned.
* solution.shuffle();
*
* // Resets the array back to its original configuration [1, 2, 3].
* solution.reset();
*
* // Returns the random shuffling of array [1, 2, 3].
* solution.shuffle();
*/

/**
* Solution:
*
* A common first idea is to walk through the array and swap each element with a
* random other element. However, this does not give a uniform random distribution.
*
* Suppose our array had 3 elements: [a, b, c]. This means it'll make 3 calls to getRandom(0, 2).
* That's 3 random choices, each with 3 possibilities. So our total number of possible
* sets of choices is 3 * 3 * 3 = 27. Each of these 27 sets of choices is equally
* probable.
*
* But we actually have 3! possible outcomes, which is 6. As follows:
*
* a, b, c
* a, c, b
* b, a, c
* b, c, a
* c, b, a
* c, a, b
*
* But our function has 27 equally-probable sets of choices. 27 is not evenly divisible
* by 6. So some of our 6 possible outcomes will be achievable with more sets of
* choices than other. This is not immediately obvious.
*
* The trick is, we choose a random item to be the first item in the resulting array,
* then choose another random item (from the items remaining) to be the second item
* in the resulting array, etc.
*
* Crucially, once an item is placed at an index it can't be moved. So for the first
* index we choose from n items, for the second index we choose from n-1 items, etc.
*
* Choosing from 'remaining' items, is the key difference between the naieve approach
* and the correct approach.
*
* If we didn't have the 'in-place' requirement, we could allocate a new array,
* then one-by one take a random item from the input array, remove it, put it in
* the first position in the new array, and keep going until the input array is
* empty (well, probably a copy of the input array—best not to destroy the input).
*
* So instead for our solution, we 'place' an item in an index by swapping it with
* the item currently at that index.
*
* Time: O(n)
* Space: O(1)
* Where n is the length of the arr
*
* @param {array} arr array of integers
* @return {void} modifies arr in-place, uniform shuffle
*/

/**
* @param {number[]} nums
*/

// const Solution = (nums) => {
//
// };

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/

// Solution.prototype.reset = () => {
//
// };

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/

// Solution.prototype.shuffle = () => {
//
// };

/**
* Your Solution object will be instantiated and called as such:
* const obj = Object.create(Solution).createNew(nums)
* const param_1 = obj.reset()
* const param_2 = obj.shuffle()
*/

// export default Solution;
