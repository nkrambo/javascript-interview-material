
/**
* Parenthesis Matching
*
* I like parentheticals (a lot).
*
* 'Sometimes (when I nest them (my parentheticals) too much (like this (and this)))
* they get confusing.'
*
* Write a function that, given a str like the one above, along with the i of an
* opening parenthesis, finds the corresponding closing parenthesis.
*
* For example, if the example string above is input with the number 10 (i of the
* first parenthesis), the output should be 79 (i of the last parenthesis).
*/

/**
* parenthesisMatching()
*
* Solution:
*
* The trick to many 'parsing' questions like this is using a stack to track which
* brackets/phrases/etc are 'open' as you go.
*
* We simply walk through the the string, starting at our input opening parenthesis
* position. As we iterate, we keep a count of how many additional '(' we find as
* openParens. When we find a ')' we decrement openNestedParens. If we find a ')'
* and openNestedParens is 0, we know that ')' closes our initial '(', so we
* return its position.
*
* In this problem we can realize our stack would only hold '(' characters. So
* instead of storing each of those characters in a stack, we can store the number
* of items our stack would be holding.
*
* That gets us from O(n) space to O(1) space.
*
* Time: O(n)
* Space: O(1)
*
* @param {string} str string of (n) length
* @param {number} pos index of first opening parenthesis
* @return {number} returns index of corresponding closing parenthesis
*/

function parenthesisMatching(str, pos) {

  // type check
  if (typeof str !== 'string' || typeof pos !== 'number') {
    throw new TypeError('parenthesisMatching: Expects 2 arguments of [string, number] types.');
  }

  // check pos actually references opening parenthesis
  if (str[pos] !== '(') {
    throw new Error('parenthesisMatching: [Pos] does not reference opening parenthesis index.');
  }

  let openParens = 0;
  for (let i = pos + 1; i < str.length; i += 1) {
    const char = str[i];

    if (char === '(') {
      openParens += 1;
    } else if (char === ')') {
      if (openParens === 0) {
        return i;
      } else {
        openParens -= 1;
      }
    }
  }

  throw new Error('No closing parenthesis :(');
}

export default parenthesisMatching;
