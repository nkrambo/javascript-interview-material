
/**
* String Compression
*
* Implement a method to perform a basic string compression using the counts
* of repeated characters.
*
* For example, the string 'aabcccccaaa' would become 'a2b1c5a3'. If the 'compressed'
* string would not become smaller than the original string, your method should
* return the original string.
*
* You can assume the string only has uppercase and lowercase letters (a-z).
*/

/**
* stringCompress()
*
* Solution:
*
* We can catch an obvious edge case here. If the string input has a length less than
* or equal to 2, then we can't compress this any further.
*
* Otherwise, we iterate over the string and count sequential occurences of any characters
* by comparing the current iteration and the one ahead.
*
* We use a counter to track the number of occurences and, once we hit a unique character,
* then append the count to a single 'key' character, hence 'a5', for example.
*
* We keep a running result string, which we concat additional results on to as we iterate.
*
* Finally, we only return the 'compressed' string if it's actually shorter than the input,
* as per the question.
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {string} returns a compressed version of string if shorter than original string
*/

function stringCompress(str) {
  // cannot compress a string of length 2
  if (str.length <= 2) return str;

  let compressed = '';
  let charCount = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      charCount += 1;
    } else {
      // concat to running result
      compressed = compressed.concat(str[i] + charCount);

      // reset counter
      charCount = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
}

export default stringCompress;
