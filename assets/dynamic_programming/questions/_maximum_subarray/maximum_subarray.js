
/**
* Maximum Subarray
*
* Tags: Array, Dynamic Programming, Divide and Conquer
* Leetcode: 53
*
* Find the contiguous subarray within an array (containing at least one number)
* which has the largest sum.
*
* Example:
*
* Given: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
* Return: 6
*
* The contiguous subarray is [4, -1, 2, 1]
*
* More practice:
*
* If you have figured out the O(n) solution, try coding another solution using
* the divide and conquer approach, which is more subtle.
*/

/**
* maxSubArrayBrute()
*
* Solution:
*
* This is also commonly known simply as MSP.
*
* We'll look at 3 solutions:
*
* 1. brute force
* 2. divide and conquer
* 3. DP (Kadane's algorithm)
*
* First, let's clarify what this question is getting at.
*
* 1. If the array contains all non-positive numbers, then the solution is that
*    closest to 0.
*
* 2. If the array contains all non-negative numbers, then the problem is trivial
*    and the maximum sum is the sum of all the elements in the list.
*
* 3. An empty set is not valid.
*
* 4. There can be multiple different sub-arrays that achieve the same maximum sum
*    to the problem, therefore the maximum sum is not always unique.
*
* Essentially, we need to check every sub array of a single element, then of 2
* elements, then 3... and so on.. and return the maximum value of all of these.
*
* So how would we brute force this?
*
* Well, this is trivial. We track the maxSoFar, but we initialise it to -Infinity,
* remember that, if all values in nums are negative, we should return the value
* closest to 0.
*
* Then we just need two for loops that enumerate all sub-arrays in the array and
* find the sum of the array A[i...j] by calculating the sum of A[i..j-1] + A[j].
*
* Time: O(n^2)
* Space: O(1)
*
* Quadratic run-time, we can do better.
*
* @param {number[]} nums
* @return {number}
*/

function maxSubArrayBrute(nums) {
  let maxSoFar = -Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    let sum = 0;

    for (let j = i; j < nums.length; j += 1) {
      sum += nums[j]; // sum is that of nums[i...j]

      maxSoFar = Math.max(maxSoFar, sum);
    }
  }

  return maxSoFar;
}

/**
* maxSubArrayDC()
*
* Solution:
*
* Using a Divide and Conquer approach, we can find the maximum subarray sum in
* O(n log n) time.
*
* 1. Divide the given array in two halves.
* 2. Return the maximum of the following three:
*     a. Maximum subarray sum in left half (Make a recursive call)
*     b. Maximum subarray sum in right half (Make a recursive call)
*     c) Maximum subarray sum such that the subarray crosses the midpoint
*
* The lines 2.a and 2.b are simple recursive calls. How to find maximum subarray
* sum such that the subarray crosses the midpoint? We can easily find the crossing
* sum in linear time. The idea is simple, find the maximum sum starting from mid
* point and ending at some point on left of mid, then find the maximum sum starting
* from mid + 1 and ending with sum point on right of mid + 1. Finally, combine the
* two and return.
*
* https://www.youtube.com/watch?v=ohHWQf1HDfU&t=135s
*
* Time: O(n log n)
* Space: O(1)
*
* @param {number[]} nums
* @return {number}
*/

function maxSubArrayDC(nums) {
  return maxSubArrayHelper(nums, nums.length);
}

function maxSubArrayHelper(nums, n) {
  // base case
  if (n === 0) return nums[0];

  const m = n / 2;
  const leftMss = maxSubArrayDC(nums, m);
  const rightMss = maxSubArrayDC(nums + m, n - m);

  let leftSum = -Infinity;
  let rightSum = -Infinity;

  // include elements on left of mid.
  let sum = 0;
  for (let i = m; i < n; i += 1) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  // include elements on right of mid.
  sum = 0;
  for (let i = (m - 1); i >= 0; i -= 1) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  const ans = Math.max(leftMss, rightMss);
  return Math.max(ans, (leftSum + rightSum));
}

/**
* maxSubArrayDP()
*
* Solution:
*
* Kadane's Algorithm!
*
* The simple idea of the Kadane's algorithm is to look for all positive contiguous
* segments of the array (maxEndingHere is used for this). And keep track of maximum
* sum contiguous segment among all positive segments (maxSoFar is used for this).
*
* Each time we get a positive sum compare it with maxSoFar and update maxSoFar if
* it is greater than maxSoFar.
*
* A bit of a background: Kadane's algorithm is based on splitting up the set of
* possible solutions into mutually exclusive (disjoint) sets. We exploit the fact
* that any solution (i.e., any member of the set of solutions) will always have
* a last element i (this is what is meant by "sum ending at position i"). Thus,
* we simply have to examine, one by one, the set of solutions whose last element's
* index is 1, the set of solutions whose last element's index is 2, then 3, and
* so forth to n. It turns out that this process can be carried out in linear time.
*
* Kadane's algorithm begins with a simple inductive question: if we know the maximum
* subarray sum ending at position i (call this B(i), what is the maximum subarray
* sum ending at position i + 1 (equivalently, what is B(i + 1). The answer turns
* out to be relatively straightforward: either the maximum subarray sum ending at
* position i + 1 includes the maximum subarray sum ending at position i as a prefix,
* or it doesn't.
*
* Thus, we can compute the maximum subarray sum ending at position i for all positions
* i by iterating once over the array. As we go, we simply keep track of the maximum
* sum we've ever seen.
*
* Because of the way this algorithm uses optimal substructures (the maximum subarray
* ending at each position is calculated in a simple way from a related but smaller
* and overlapping subproblem: the maximum subarray ending at the previous position)
* this algorithm can be viewed as a simple/trivial example of dynamic programming.
*
* Lets take the example:
* [-2, -3, 4, -1, -2, 1, 5, -3]
*
* maxSoFar = maxEndingHere = 0
*
* for i = 0,  a[0] =  -2
* maxEndingHere = maxEndingHere + (-2)
* Set maxEndingHere = 0 because maxEndingHere < 0
*
* for i = 1,  a[1] =  -3
* maxEndingHere = maxEndingHere + (-3)
* Set maxEndingHere = 0 because maxEndingHere < 0
*
* for i = 2,  a[2] =  4
* maxEndingHere = maxEndingHere + (4)
* maxEndingHere = 4
* maxSoFar is updated to 4 because maxEndingHere greater
* than maxSoFar which was 0 till now
*
* for i = 3,  a[3] =  -1
* maxEndingHere = maxEndingHere + (-1)
* maxEndingHere = 3
*
* for i = 4,  a[4] =  -2
* maxEndingHere = maxEndingHere + (-2)
* maxEndingHere = 1
*
* for i = 5,  a[5] =  1
* maxEndingHere = maxEndingHere + (1)
* maxEndingHere = 2
*
* for i = 6,  a[6] =  5
* maxEndingHere = maxEndingHere + (5)
* maxEndingHere = 7
* maxSoFar is updated to 7 because maxEndingHere is
* greater than maxSoFar
*
* for i = 7,  a[7] =  -3
* maxEndingHere = maxEndingHere + (-3)
* maxEndingHere = 4
*
* https://www.youtube.com/watch?v=86CQq3pKSUw&t=20s
* https://en.wikipedia.org/wiki/Maximum_subarray_problem
*
* Time: O(n)
* Space: O(1)
*
* @param {number[]} nums
* @return {number}
*/

function maxSubArrayDP(nums) {
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

export { maxSubArrayBrute, maxSubArrayDC, maxSubArrayDP };
