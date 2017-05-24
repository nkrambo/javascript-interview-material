
/**
* Longest Palindromic Substring
*
* Tags: String, Manachers, Dynamic Programming
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
* We can use these properties to our advantage using a dynamic programming approach.
*
* The two conditions we are checking to see if a string is a palindrome are:
*
* 1. The first and last characters match.
* 2. Substring (excluding the first and last characters) is a palindrome.
*
* Let's use the example string 'banana'.
*
* This string contains a few palindromes, 'ana', 'nan' and the longest 'anana'.
*
* As with most DP solutions, we'll use a matrix to build our answer. We have the
* string represented as columns and rows, or simply (x, y).
*
* We also need to keep track of the 'currentLength', 'maxLength' and 'longestPalindrome',
* so far.
*
* Firstly, we are testing for a 'currentLength' of 1, that is, 'B' and 'B', or A[i][i].
*
* We know that single characters are valid palindromes, and we can mark these as
* true. Once we go through we update our 'maxLength' to 1 and 'longestPalindrome'
* to 'A', which was the last cell we calculated.
*
* Next, we update our 'currentLength' to 2. We step through and see that we calculate
* no true palindromes, as none of the cells meet the first condition of first and
* last characters matching. 'maxLength' stays the same and so does 'longestPalindrome'.
*
* Now we step through again with a 'currentLength' of 3. We can see that 'ban' does
* not meet our conditions, but 'ana' has matching first and last characters and
* it's substring 'n' is a valid palindrome and set to true. Therefore, we update
* our 'maxLength' to 3 and our 'longestPalindrome' to 'ana'.
*
* We continue through the matrix building our results with this formula until we
* can return the longest palindrome.
*
* It's important to note that we first need to initialize the one and two letters
* palindromes, and work our way up finding all three letters palindromes, and so on...
*
* +-----+------------------------------------+
* |     |   B    A     N     A     N     A   |
* +------------------------------------------+
* |  B  |   T    F     F     F     F     F   |
* +------------------------------------------+
* |  A  |        T     F     T     F     T   |
* +------------------------------------------+
* |  N  |              T     F     T     F   |
* +------------------------------------------+
* |  A  |                    T     F     T   |
* +------------------------------------------+
* |  N  |                          T     F   |
* +------------------------------------------+
* |  A  |                                T   |
* +------------------------------------------+
*
* The formula for this is easy:
*
* Base cases:
*
* single character palindrome:
*
* T[i][i] = true
*
* 2 character palindrome:
*
* if (s[i] === s[i + 1]) {
*   T[i][i + 1]
* }
*
* All other cases:
*
* if (s[i] === s[j] && T[i + 1][j - 1]) {
*   T[i][j] = true
* }
*
* Time: O(n^2)
* Space: O(n^2)
*
* @param {string} s string of (n <= 1000) length
* @return {string} returns longest palindromic substring of s
*/

function longestPalindromeDP(s) {
  let palindromeBeginsAt = 0; // index where the longest palindrome begins
  let maxLength = 1;          // length of the longest palindrome

  // build boolean matrix of NxN
  const matrix = [];
  for (let i = 0; i < s.length; i += 1) {
    matrix[i] = new Array(s.length);
  }

  // base case 1: single letter palindromes
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i][i] = true;
  }

  // base case 2: palindromes of two characters
  for (let i = 0; i < s.length - 1; i += 1) {
    if (s[i] === s[i + 1]) {
      matrix[i][i + 1] = true;
      palindromeBeginsAt = i;
      maxLength = 2;
    }
  }

  // all other cases: palindromes of 3 characters to n
  for (let currentLength = 3; currentLength <= s.length; currentLength += 1) {
    for (let i = 0; i < (s.length - currentLength) + 1; i += 1) {
      const j = (i + currentLength) - 1;

      // 1. first and last characters should match
      // 2. substring should be a palindrome
      if (s[i] === s[j] && matrix[i + 1][j - 1]) {
        matrix[i][j] = true;
        palindromeBeginsAt = i;
        maxLength = currentLength;
      }
    }
  }

  return s.substring(palindromeBeginsAt, maxLength + palindromeBeginsAt);
}

/**
* longestPalindrome()
*
* Solution:
*
* We can do even better than our DP solution, achieving a constant space complexity.
*
* We observe that a palindrome mirrors around its center. That is, 'dad' mirrors
* around the center character 'a', it has a 'd' on each side. Likewise, 'baab'
* also mirrors from the center, except there is no center character in the middle,
* but working from the middle, there are two 'a' characters, then two 'b' characters.
*
* This is true for all valid palindromes and therefore we can validate a string
* as a palindrome by expanding from it's center and checking it mirrors on both
* sides.
*
* We can write a help function to do this. We'll call it expand. It takes a string
* and a left and right index. It will then check if characters mirror each other
* and expand outward until the mirror breaks, at which point it will return the
* mirror (palindrome) that is found.
*
* Okay, so how many centers are there in a string. Well, there are actually
* 2n - 1 such centers. Yup, that's right... here's why.
*
* You might be asking why there are 2n - 1 but not n centers? The reason is the
* center of a palindrome can be in between two letters. Such palindromes have even
* number of letters (such as 'abba') and its center are between the two 'b's.
*
* If the expand function is expanding on an even lengthed string, the smallest
* substring that it might find is actually an empty string, e.g in 'ab', it would
* be ''.
*
* On the other hand, if the string is odd, then the smallest substring expand can
* return is the single middle character, which is a valid palindrome, e.g in 'abc',
* it would be 'b'.
*
* We'll need to keep track of the 'maxLength' that we've found so far so that we
* can return the correct result.
*
* Then we step through the string and pass each character into the expand helper,
* this will catch all the cases of 'odd' string lengths that have a middle character.
* Whenever we encounter a longer vaild mirror (palindrome) than our 'maxLength' we
* update our result.
*
* For example, for the string 'banana':
*
* expand(undefined, 'a')  => 'b'
* expand('b', 'n')        => 'a'
* expand('a', 'a')        => 'ana'
* expand('n', 'n')        => 'anana'
* expand('a', 'a')        => 'ana'
* expand('n', undefined)  => 'a'
*
* The longest palindrome we found was 'anana'.
*
* Now we do the same but catch all the cases where the string is even, that is,
* has no middle character.
*
* expand('b', 'a')        => ''
* expand('a', 'n')        => ''
* expand('n', 'a')        => ''
* expand('a', 'n')        => ''
* expand('n', 'a')        => ''
* expand('a', undefined)  => ''
*
* We find that there are no valid palindromes through this pass.
*
* Therefore, the longest palindromic sunstring is 'anana', so we return it.
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
  let maxLength = 0;
  let result = '';

  // catch edge
  if (s.length < 2) return s;

  // expand odd
  for (let i = 0; i < s.length; i += 1) {
    const temp = expand(s, i - 1, i + 1);

    if (temp.length > maxLength) {
      maxLength = temp.length;
      result = temp;
    }
  }

  // expand even
  for (let i = 0; i < s.length; i += 1) {
    const temp = expand(s, i, i + 1);

    if (temp.length > maxLength) {
      maxLength = temp.length;
      result = temp;
    }
  }

  return result;
}

/**
* expand()
*
* @param {string} s string
* @param {number} left index
* @param {number} right index
* @return {string} returns substring
*/

function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    // iterate outward
    left -= 1;
    right += 1;
  }

  return s.substring(left + 1, right);
}

/**
* Manacher's Algorithm
*
* This algorithm solves this in O(n) time. This is the ultimate answer to this
* question. Check it out under 'strings/common/manachers'
*/

export { longestPalindromeBrute, isPalindrome, longestPalindromeDP, longestPalindrome };
