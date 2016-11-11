
/**
* Majority Element
*
* Types: Bit Manipulation
*
* Given an array of size n, find the majority element. The majority element is
* the element that appears more than (n / 2) times.
*
* You may assume that the array is non-empty and the majority element always exist
* in the array.
*
* There are many ways to solve this problem. In fact, there are easily at least
* 7 approaches to this problem. Anywhere from using a hash map, sorting, divide
* and conquer and so on. We're going to focus on a few of these.
*/

/**
* majorityBit()
*
* Solution:
*
* The key for this bit manipulation approach lies in how to count the number of
* 1s on a specific bit. Specifically, you need a mask with a 1 on the i-th bit and
* 0 otherwise to get the i-th bit of each element in nums.
*
* Time: O(n)
* Space: O(1)
*
* @param {array} nums array of integers, of n length
* @return {number} Returns the value of the integer that appears more than n / 2 times
*/

function majorityBit(nums) {
  let major = 0;

  // iterate 32 bits and mask with a 1 bit at index i, otherwise 0s
  for (let i = 0, mask = 1; i < 32; i += 1, mask <<= 1) {
    let bitCounts = 0;

    // iterate over array
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] & mask) bitCounts += 1;

      if (bitCounts > nums.length / 2) {
        major |= mask;
        break;
      }
    }
  }

  return major;
}

/**
* majorityMooreVoting()
*
* Solution:
*
* In this approach we use a known algorithm named the Boyer–Moore majority vote
* algorithm. It finds the majority of a sequence of elements using linear time
* and constant space.
*
* In its simplest form, the algorithm finds a majority element. However, if there
* is no majority, the algorithm will not detect that fact, and will still output
* one of the elements.
*
* It's fairly simple really. We track to variables, 'count' and 'major'.
*
* We then process numbers in our sequence, one at a time.
*
* When processing an element nums[i], if the counter is zero, the algorithm stores
* nums[i] as its remembered sequence element and sets the counter to one. Otherwise,
* it compares nums[i] to the stored element and either increments the counter
* (if they are equal) or decrements the counter (otherwise).
*
* At the end of this process, if the sequence has a majority, it will be the
* element stored by the algorithm.
*
* Time: O(n)
* Space: O(1)
*
* @param {array} nums array of integers, of n length
* @return {number} Returns the value of the integer that appears more than n / 2 times
*/

function majorityMooreVoting(nums) {
  let count = 0;
  let major = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (count === 0) major = nums[i];
    nums[i] === major ? count += 1 : count -= 1;
  }

  return major;
}

/**
* majorityHash()
*
* Solution:
*
* For this solution, we iterate over the input array and count the occurences of
* each number in the array. We do this with a map object.
*
* At each iteration, we check to see if the current index value has already been
* counted more times than half the size of the array. If so, we have found our
* majority value and we return it, otherwise we return null by default.
*
* Time: O(log n)
* Space: O(n)
*
* We use additional space using a map. Our time complexity will be O(log n) in the
* average case as we only need to count the majority value, which is half of the
* length of the input array.
*
* @param {array} nums array of integers, of n length
* @return {number} Returns the value of the integer that appears more than n / 2 times
*/

function majorityHash(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1); // increment by or set to 1
    if (map.get(nums[i]) > nums.length / 2) return nums[i];
  }

  return null;
}

/**
* majoritySort()
*
* Solution:
*
* This is by far the simplest solution.
*
* Since we are given the assumption that the input array will always have a
* majority, we can achieve this in 2 lines.
*
* First, we sort our array from lowest to highest. Now it's sorted, the majority
* will always appear as the middle index, or the index just before the middle.
*
* When you think about it, this must always be the case if the majority is always
* greater than (nums / 2). The majority will take up at least half the array and
* will always include the middle index of a sorted array, leaving the remaining
* values to the left and right.
*
* Time: O(n log n)
* Space: O(1)
*
* The sort() method takes O(n log n) on average.
*
* @param {array} nums array of integers, of n length
* @return {number} Returns the value of the integer that appears more than n / 2 times
*/

function majoritySort(nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
}

export { majorityBit, majorityHash, majoritySort, majorityMooreVoting };
