
/**
* Valid Palindrome
*
* Tags: Two Pointers, String
* Leetcode: 125
*
* Given a string, determine if it is a palindrome, considering only alphanumeric
* characters and ignoring cases.
*
* For example,
*
* "A man, a plan, a canal: Panama" is a palindrome.
* "race a car" is not a palindrome.
*
* Note:
*
* Have you consider that the string might be empty? This is a good question to
* ask during an interview.
*
* For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
* isPalindrome()
*
* Solution:
*
* Checking to see if a string is palindromic is trivial. You simply use two pointers
* and traverse inward comparing each character at indices i, j. If any of these
* characters do not match each other then it can't be a palindrome.
*
* This question also states that we must only consider alphanumeric characters
* and that we must ignore case sensitivity.
*
* We can take the normal approach and use a regular expression to only compare
* alphanumeric characters and the String.toLowerCase() method to ignore case.
*
* If you're not familiar with regular expressions, they're really handy.
*
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*
* Basically:
*
* 1. /.../ - the forward slashes are the literal syntax for a regular expression,
*    with our arguments (or pattern) living between these. You can use the 'new'
*    keyword too.
*
* 2. [] - the square brackets denote a character set. So we're saying any characters
*    that match a-z OR 0-9.
*
* 3. ^ and $ - the carat symbol is saying only match the start of the string, when
*    testing. We're only testing 1 character at a time, no more. When you have
*    both ^ and $ you tell the engine that whatever is in between them must cover
*    the entire line end-to-end.
*
* 4. /i - the 'i' flag means to ignore case, so it's case insensitive.
*
* So... we use this regex to test if the current pointers are valid alpha-numeric
* values, that includes testing for spaces. If they're not, we move the pointers
* inward, essentially skipping those values.
*
* We can then test that the pointers have matching values at each index, like we
* do normally for checking a palondromic string.
*
* @param {string} s
* @return {boolean}
*/

function isPalindrome(s) {
  // edge case, short circut
  if (s.length <= 1) return true;

  // regex for alpha-numeric
  const isAlphaNum = /^[a-z0-9]+$/i;

  // two pointers, move inward
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    // if a speacial char or space, move pointer inward
    if (!isAlphaNum.test(s[left])) {
      left += 1;
    } else if (!isAlphaNum.test(s[right])) {
      right -= 1;

    // otherwise, compare current chars, but we must lowercase
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;

    // must be matching, keep moving inward
    } else {
      left += 1;
      right -= 1;
    }
  }

  // fell through, so must be palindrome
  return true;
}

export default isPalindrome;
