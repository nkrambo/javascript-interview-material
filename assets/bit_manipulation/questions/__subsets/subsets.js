
/**
* Subsets
*
* Types: Bit Manipulation
*
* Given a set of distinct integers, nums, return all possible subsets.
*
* Note: The solution set must not contain duplicate subsets.
*
* Example:
* Input: [1, 2, 3]
* Output: [[3],
*          [1],
*          [2],
*          [1, 2, 3],
*          [1, 3],
*          [2, 3],
*          [1, 2],
*          []]
*
* Solution:
*
*
*
* Time: O(1)
* Space: O(1)
*
* @param {array} nums array of distinct integers
* @return {array} Returns an array of all possible subsets of nums
*/

function subsets(nums) {
  nums.sort();
  const totalNumber = 1 << nums.length;
  const collection = [];

  for (let i = 0; i < totalNumber; i += 1) {
    const set = [];

    for (let j = 0; j < nums.length; j += 1) {
      if ((i & (1 << j)) !== 0) {
        set.push(nums[j]);
      }
    }
    
    collection.push(set);
  }

  return collection;
}

// Arrays.sort(S);
// int totalNumber = 1 << S.length;
// List<List<Integer>> collection = new ArrayList<List<Integer>>(totalNumber);
// for (int i=0; i<totalNumber; i++) {
//   List<Integer> set = new LinkedList<Integer>();
//   for (int j=0; j<S.length; j++) {
//     if ((i & (1<<j)) != 0) {
//       set.add(S[j]);
//     }
//   }
//   collection.add(set);
// }
// return collection;

export default subsets;
