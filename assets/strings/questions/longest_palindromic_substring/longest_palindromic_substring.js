
/**
* Longest Palindromic Substring
*
* Tags: String
* Leetcode: 5
*
* Given a string, find the longest palindromic substring of that string. You may
* assume that the maximum length of the string is 1000, and there exists one
* unique longest palindromic substring.
*
* Example 1:
*
* Given "babad"
* Return "bab"
* Note: "aba" is also a valid answer.
*
* Example 2:
*
* Given "cbbd"
* Return "bb"
*/

/**
* longestPalindromeBrute()
*
* Solution:
*
* The brute force approach is to check all substrings of size 1 to n by passing
* them through a helper function, which validates it as a palindrome. We then return
* the longest of these valid palindromes.
*
* A couple of tricky things to consider...
*
* We grab the first character as a default substring and trivial valid palindrome.
* If we encounter a longer valid palindrome, this will be overwritten.
*
* If a string is only 1 character, simply return the string.
*
* Time: O(n^3)
* Space: O(1)
*
* Assume that n is the length of the input string. How many substrings are there?
* Well, we know that there are n(n-1) / 2 substrings, excluding single characters
* which are valid palindromes by themselves.
*
* Take our first exmple string: 'babad'.
*
* It's substrings are:
*
* 'b', 'ba', 'bab' .... 'babad'
* 'a', 'ab', 'aba' .... 'abad' ... and so on.
*
* This means that there are n^2 substrings, since each substring takes n time to
* validate with our helper, the total runtime is O(n^3), which is not great.
*
* We do have a constant space complexity, however.
*
* @param {string} s string of (n <= 1000) length
* @return {string} returns longest palindromic substring of s
*/

function longestPalindromeBrute(s) {
  // grab first char by default, trivial palindrome
  let result = s[0];

  // catch edge
  if (s.length === 1) return s;

  // check all substrings
  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j <= s.length; j += 1) {
      // check substring is palindromic
      if (isPalindrome(s, i, j)) {
        // overwrite result if longer
        if ((j - i) >= result.length) {
          result = s.substring(i, j + 1);
        }
      }
    }
  }

  return result;
}

/**
* isPalindrome()
*
* @param {string} s string to check if palindromic
* @param {number} left index
* @param {number} right index
* @return {boolean} returns true if s is palindromic, otherwise false
*/

function isPalindrome(s, left, right) {
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left += 1;
    right -= 1;
  }

  return true;
}

/**
* longestPalindromeDP()
*
* Solution:
*
* To improve over the brute force solution, we first observe how we can avoid
* unnecessary re-computation while validating palindromes.
*
* Consider the case 'ababa'. If we already knew that 'bab' is a palindrome, it is
* obvious that 'ababa' must be a palindrome since the two left and right end letters
* are the same.
*
* Time: O(n^2)
* Space: O(n^2)
*
* @param {string} s string of (n <= 1000) length
* @return {string} returns longest palindromic substring of s
*/

function longestPalindromeDP(s) {
  let result = null;

  // build matrix
  const matrix = [];
  for (let i = 0; i < s.length; i += 1) {
    matrix[i] = new Array(s.length).fill(false);
  }

  for (let i = s.length - 1; i >= 0; i -= 1) {
    for (let j = i; j < s.length; j += 1) {
      matrix[i][j] = s[i] === s[j] && (j - 1 < 3 || matrix[i + 1[j - 1]]);

      if (matrix[i][j] && (result === null || (j - i) + 1 > result.length)) {
        result = s.substring(i, j + 1);
      }
    }
  }

  return result;
}

/**
* longestPalindrome()
*
* Solution:
*
* We observe that a palindrome mirrors around its center. Therefore, a palindrome
* can be expanded from its center, and there are only 2n - 1 such centers.
*
* You might be asking why there are 2n - 1 but not nn centers? The reason is the
* center of a palindrome can be in between two letters. Such palindromes have even
* number of letters (such as 'abba') and its center are between the two 'b's.
*
* Time: O(n^2)
* Space: O(1)
*
* Since expanding a palindrome around its center could take O(n) time, the overall
* complexity is O(n^2).
*
* @param {string} s string of (n <= 1000) length
* @return {string} returns longest palindromic substring of s
*/

function longestPalindrome(s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i += 1) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      // start = i - ((len - 1) / 2);
      start = (i - len - 1) / 2;
      end = i + (len / 2);
    }
  }

  return s.substring(start, end + 1);
}

/**
* expandAroundCenter()
*
* @param {string} s string
* @param {number} left index
* @param {number} right index
* @return {number} returns
*/

function expandAroundCenter(s, left, right) {
  let L = left;
  let R = right;

  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L -= 1;
    R += 1;
  }

  return R - L - 1;
}

// private void extendPalindrome(String s, int j, int k) {
// 	while (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {
// 		j--;
// 		k++;
// 	}
// 	if (maxLen < k - j - 1) {
// 		lo = j + 1;
// 		maxLen = k - j - 1;
// 	}
// }}

export { longestPalindromeBrute, isPalindrome, longestPalindromeDP, longestPalindrome, expandAroundCenter };
