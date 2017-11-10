
/**
* Length of Last Word
*
* Tags: Array
* Leetcode: 58
*
* Given a string s, which consists of upper/lower-case alphabetical and empty
* space characters ' ', return the length of last word in the string.
*
* If the last word does not exist, return 0.
*
* Note:
*
* A word is defined as a character sequence consists of non-space characters only.
*
* Example:
*
* Given: "Hello World"
* Return: 5
*/

/**
* lengthOfLastWord()
*
* Solution:
*
* Well, the basic idea is very simple. Start from the tail of s and move backwards
* to find the first non-space character. Then from this character, move backwards
* and count the number of non-space characters until we pass over the head of s
* or meet a space character. The count will then be the length of the last word.
*
* Time: O(n)
* Space: O(1)
*
* We will have to hit every character in the string in the worst case, that is,
* when there is only 1 word in the string.
*
* @param {string} s
* @return {number}
*/

function lengthOfLastWord(s) {
  let len = 0;
  let tail = s.length - 1;
  while (tail >= 0 && s[tail] === ' ') tail -= 1;
  while (tail >= 0 && s[tail] !== ' ') {
    len += 1;
    tail -= 1;
  }

  return len;
}

export default lengthOfLastWord;
