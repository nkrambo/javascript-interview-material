
/**
* Valid Parentheses
*
* Tags: Stack, String
* Leetcode: 20
*
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
* determine if the input string is valid.
*
* The brackets must close in the correct order, '()' and '()[]{}' are all valid
* but '(]' and '([)]' are not.
*
* Some more examples:
*
* Input: '{ [ ] ( ) }'
* Output: true
*
* Input: '{ [ ( ] ) }'
* Output: false
*
* Input: '{ [ }'
* Output: false
*/

/**
* isValid()
*
* Solution:
*
* We iterate through our string, making sure that:
*
* 1. Each closer corresponds to the most recently seen, unclosed opener
* 2. Every opener and closer is in a pair
*
* We use a stack to keep track of the most recently seen, unclosed opener.
* And if the stack is ever empty when we come to a closer, we know that closer
* doesn't have an opener.
*
* So as we iterate:
*
* - If we see an opener, we push it onto the stack.
*
* - If we see a closer, we check to see if it is the closer for the opener at the
*   top of the stack. If it is, we pop from the stack. If it isn't, or if the
*   stack is empty, we return false.
*
* - If we finish iterating and our stack is empty, we know every opener was
*   properly closed.
*
* Let's say we use two sets:
*
* ['(', '{', '['] are called 'openers'.
* [')', '}', ']'] are called 'closers'.
*
* We also use a POJO to map our openers to closers.
*
* Although the questions states that we will only ever recieve parentheses characters,
* this solution will also work when other types of characters are passed in as well.
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} s string of (n) length
* @return {boolean} returns true if all brackets are balanced
*/

function isValid(s) {
  // map brackets
  const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // store our openers and closers
  const openers = new Set(['(', '{', '[']);
  const closers = new Set([')', '}', ']']);

  // openers stack
  const openersStack = [];

  for (const char of s) {
    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }

      // if this closer doesn't match up, short-circuit
      if (openersToClosers[openersStack.pop()] !== char) return false;
    }
  }

  return openersStack.length === 0;
}

export default isValid;
