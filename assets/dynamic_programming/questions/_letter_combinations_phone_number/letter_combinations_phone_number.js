
/**
* Letter Combinations of a Phone Number
*
* Tags: Backtracking, string
* Leetcode: 17
*
* Given a digit string, return all possible letter combinations that the number
* could represent.
*
* A mapping of digit to letters (just like on the telephone buttons) is given below.
*
*     [1]     [2]     [3]
*             abc     def
*
*     [4]     [5]     [6]
*     ghi     jkl     mno
*
*     [7]     [8]     [9]
*     pqrs    tuv     wxyz
*
*     [*]     [0]     [#]
*
* Example:
*
* Given '23'
* Return ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
*
* Note:
*
* Although the above answer is in lexicographical order, your answer could be in
* any order you want.
*/

/**
* letterCombinations()
*
* Solution:
*
* This is a iterative solution. For each digit added, remove and copy every element
* in the queue and add the possible letter to each element, then add the updated
* elements back into queue again. Repeat this procedure until all the digits are
* iterated.
*
* This is basically the BFS solution, using a queue.
*
* Using our sampkle input:
*
* while()
*
* round 1 - ['']
* round 2 - ['a', 'b', 'c']
* round 3 - ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
*
* Time: O(1)
* Space: O(1)
*
* @param {string} digits in string format
* @return {array} returns all the combinations of digits
*/

function letterCombinations(digits) {
  const queue = [];

  // catch edge
  if (!digits.length) return queue;

  // map our digits to strings representing their letters,
  // don't worry about 0 and 1
  const buttons = new Map();
  buttons.set('2', 'abc');
  buttons.set('3', 'def');
  buttons.set('4', 'ghi');
  buttons.set('5', 'jkl');
  buttons.set('6', 'mno');
  buttons.set('7', 'pqrs');
  buttons.set('8', 'tuv');
  buttons.set('9', 'wxyz');

  // kick off our queue, min length of 1
  queue.push('');

  for (let i = 0; i < digits.length; i += 1) {
    const letters = buttons.get(digits[i]);

    // peek
    while (queue[0].length === i) {
      const row = queue.shift(); // dequeue

      // build our result by re-queueing
      for (const l of letters) {
        queue.push(row + l);
      }
    }
  }

  return queue;
}

export default letterCombinations;
