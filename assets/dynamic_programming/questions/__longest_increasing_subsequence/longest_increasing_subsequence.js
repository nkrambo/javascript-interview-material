
/**
* Longest Increasing Subsequence
*
* Tags: Bottom Up, Classic Problems
*
* Find a subsequence in given array in which the subsequence's elements are in
* sorted order, lowest to highest, and in which the subsequence is as long as possible.
*
* Example:
* Input: [3, 4, -1, 0, 6, 2, 3]
* Output: 4, [-1, 0, 2, 3]
*
* Example:
* Input: [2, 5, 1, 8, 3]
* Output: 3, [2, 5, 8]
*/

/**
* longestIncreasingSub()
*
* Solution:
*
*
* Time: O(n * k)
* Space: O(n * k)
*
* @param {array} nums positive and negative integers
* @return {number} returns the longest increasing subsequence of nums
*/

function longestIncreasingSub(nums) {

}

// def longest_increasing_subsequence(sequence):
//     sequence_length = len(sequence)
//
//     T = [1 for _ in range(sequence_length)]
//     solution_indices = [i for i in range(sequence_length)]
//
//     for index_i in range(1, sequence_length):
//         for index_j in range(0, index_i):
//             if (sequence[index_i] > sequence[index_j]) and (T[index_i] < T[index_j] + 1):
//                 T[index_i] = T[index_j] + 1
//                 solution_indices[index_i] = index_j
//
//     # find the index of the max number in T
//     max_value = max(T)
//     max_index = T.index(max_value)
//
//     # Print solution using linked values in solution_indices
//
//     next_index = max_index
//
//     while True:
//         print sequence[next_index],
//
//         old_index = next_index
//         next_index = solution_indices[next_index]
//         if next_index == old_index:
//             break
//
//     return T[max_index]

export default longestIncreasingSub;
