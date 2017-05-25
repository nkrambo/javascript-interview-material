
/**
* Manacher's Algorithm
*
* The longest palindromic substring problem is the problem of finding a maximum-length
* contiguous substring of a given string that is also a palindrome.
*
* For example, the longest palindromic substring of "bananas" is "anana". The longest
* palindromic substring is not guaranteed to be unique; for example, in the string
* "abracadabra", there is no palindromic substring with length greater than three,
* but there are two palindromic substrings with length three, namely, "aca" and "ada".
*
* The longest palindromic substring problem should not be confused with the different
* problem of finding the longest palindromic subsequence.
*
* Manacher's algorithm solves this in linear time, O(n), which is a huge improvement
* on other common quadratic runtime, O(n^2) algorithms that solve this.
*/

/**
* How's it Work?
*
* Let's assume we have an input string of 'abaxabaxabb'.
*
* There are many palindromic substrings in the string. For example, 'aba', 'axa',
* 'baxab'. Remember we want the longest palindromic substring, which is actually
* 'baxabaxab', or s[1] - s[9], with 'b' as the middle character.
*
* So the first thing we can do is to think of our string more as an array like this:
*
* +------------------------------------------------------------------+
* |   a    b     a     x     a     b     a     x     a     b     b   |
* +------------------------------------------------------------------+
* |   0    1     2     3     4     5     6     7     8     9    10   |
* +------------------------------------------------------------------+
*
* Let's also consider some properties of palindromes...
*
* The left side of a palindrome is a mirror image of its right side. That is, a
* palindrome mirrors around its center. The center can be either a single character
* for an 'odd' length palindromic string, like 'dad'. Or, the center may lay between
* two characters like it does for all 'even' length palindromic strings, like 'abba'.
*
* That means that we can validate a palindrome by expanding outward from the center
* and checking if the first and last characters are the same.
*
* We want to make a temporary array of the same length. We'll use this to track
* the length of valid palindrome at each index in our string. We'll assume that
* each character is the center and that we are working with odd string lengths.
*
* So... at s[0], or 'a', we can see that on the left we have 'undefined' and on
* the right, we have 'b'. So the longest palindrome at this index is 'a', 1.
*
* Next, we look at s[1], or 'b'. We can see that the longest palindrome we can
* make working outward is 'aba', 3.
*
* We work our way though the string computing these values.
*
* +------------------------------------------------------------------+
* |   1    3     1     7     4     5     6     7     8     9    10   |
* +------------------------------------------------------------------+
*
* https://www.youtube.com/watch?v=V-sEwsca1ak&t=220s
*/

/**
* manachers()
*
* @param {string} s string of (n <= 1000) length
* @return {string} returns longest palindromic substring of s
*/

function manachers(s) {
  // preprocess the input string to convert it into
  // type abc -> $a$b$c$ to handle even length case
  const sentinel = [];

  for (let i = 0, j = 0; i < (s.length * 2) + 1; i += 1) {
    sentinel[i] = (i % 2 !== 0) ? s[j += 1] : '$';
  }

  // create temporary array for holding largest palindrome at every center point
  // there are (2 * n) + 1 center points.
  const temp = [];
  let start = 0;
  let end = 0;

  // i is the center point
  for (let i = 0; i < sentinel.length; i += 1) {
    // expand around i, see how far we can go
    while (start > 0 && end < sentinel.length - 1 && sentinel[start - 1] === sentinel[end + 1]) {
      start += 1;
      end -= 1;
    }

    // set the longest value of palindrome around center i at temp[i]
    temp[i] = end - (start + 1);

    // case 2:
    // current palindrome is proper suffix of input, no need to proceed
    if (end === temp.length - 1) break;

    // mark newCenter to be either end or end + 1
    // depending on if we're dealing with even or odd number input
    let newCenter = end + (i % 2 === 0 ? 1 : 0);

    for (let j = i + 1; j <= end; j += 1) {
      // i - (j - i) is left mirror
      // it's possible left mirror might go beyond current center palindrome,
      // so take minimum of either left side palindrome or distance of j to end
      temp[j] = Math.min(temp[i - (j - i)], (2 * (end - j)) + 1);

      // only proceed if we get case 3. This check is to make sure we do not pick j as new center for case 1 or case 4
      // as soon as we find a center lets break out of this inner while loop.
      if ((j + temp[i - (j - i)]) / 2 === end) {
        newCenter = j;
        break;
      }
    }

    // make i as newCenter. Set right and left to atleast the value we already know should be matching based of left side palindrome.
    i = newCenter;
    end = (i + temp[i]) / 2;
    start = (i - temp[i]) / 2;
  }

  // find the max palindrome in temp and return it
  let max = 0;
  for (let i = 0; i < temp.length; i += 1) {
    const value = temp[i] / 2;
    if (max < value) {
      max = value;
    }
  }

  return max;
}

export default manachers;
