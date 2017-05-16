
/**
* Bracket Validator
*
* Tags: Stack
*
* You're working with an intern that keeps coming to you with JavaScript code
* that won't run because the braces, brackets, and parentheses are off. To save
* you both some time, you decide to write a braces/brackets/parentheses validator.
*
* Let's say:
*
* ['(', '{', '['] are called 'openers'.
* [')', '}', ']'] are called 'closers'.
*
* Write an efficient function that tells us whether or not an input string's
* openers and closers are properly nested.
*
* Examples:
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
* bracketValidator()
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
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {boolean} returns true if all brackets are balanced
*/

function bracketValidator(str) {
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

  for (const char of str) {
    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      } else {
        // if this closer doesn't match up, short-circuit
        if (openersToClosers[openersStack.pop()] !== char) return false;
      }
    }
  }

  return openersStack.length === 0;
}

export default bracketValidator;
