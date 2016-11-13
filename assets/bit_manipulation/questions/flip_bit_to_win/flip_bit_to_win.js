
/**
* Flip Bit to Win
*
* You have an integer and you can flip exactly one bit from num 0 to num 1.
* Write code to find the length of the longest sequence of 1s you could create.
*
* Example:
* Input: 1775 (or: 11011101111)
* Output: 8
*
* Solution:
*
* We can think about each integer as being an alternating sequence of 0s and 1s.
* Whenever a 0s sequence has length one, we can potentially merge the adjacent 1s
* sequence.
*
* A brute force approach could be to convert the integer into an array that reflects
* the lengths of the 0s and 1s sequences. For example, 11011101111 would be
* (reading from right to left) [0, 4, 1, 3, 1, 2, 21]. That is, (0 0s), (4 1s),
* (1 0), (3 1s) and so on... in a strictly alternating sequence, always starting
* with the 0s sequence.
*
* Once we have this, we just walk through the array. At each 0s sequence, we consider
* merging the adjacent 1s sequences if the 0s sequence has length 1.
*
* This is pretty good. It's O(b) time and O(b) space, where b is the length of the
* sequence. We can do better though...
*
* To reduce the space usage, note that we don't need to hang onto the length of
* each sequence the entire time. We only need it long enough to compare each 1s
* sequence to the immediately preceding 1s sequence.
*
* Therefore, we can just walk through the integer doing this, tracking the current
* 1s sequence length and the previous 1s sequence length.
*
* When we see a zero, update previousLength:
*
* - If the next bit is a 1, previousLength should be set to the currentLength
* - If the next bit is a 0, then we can't merge these sequences together. So, set
*   previousLength to 0.
*
* Finally, update maxLength as we go.
*
* Time: O(b)
* Space: O(1)
*
* Where b is the length of the sequence.
*
* @param {number} num integer
* @return {number} Returns length of the longest sequence
*/

function flipBitToWin(num) {
  // if all 1s, this is already the longest sequence
  // if (~num === 0) return num;

  let currentLength = 0;
  let previousLength = 0;
  let maxLength = 1; // we can always have a sequence of at least one 1

  while (num !== 0) {
    // current bit is a 1
    if ((num & 1) === 1) {
      currentLength += 1;

    //  current bit is a 0
    } else if ((num & 1) === 0) {
      // update to 0 (if next bit is a 0) or currentLength (if next bit is a 1)
      previousLength = (num & 2) === 0 ? 0 : currentLength;
      currentLength = 0;
    }

    maxLength = Math.max(previousLength + currentLength + 1, maxLength);
    num = num >>> 1;
  }

  return maxLength;
}

export default flipBitToWin;
