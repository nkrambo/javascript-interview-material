
/**
* Reverse Words
*
* You're working on a secret team solving coded transmissions.
*
* Your team is scrambling to decipher a recent message, worried it's a plot
* to break into a major European National Cake Vault. The message has been
* mostly deciphered, but all the words are backwards!
* Your colleagues have handed off the last step to you.
*
* Write a function reverseWords() that takes a string message and reverses
* the order of the words in-place.
*
*/

/**
* reverseWords()
*
* Solution:
*
*
* Time: O(n)
* Space: O(1)
* Where n is the length of the string input.
*
* @param {string} str String of (n) length, with multiple words
* @return {string} returns a reversed version of the input string
*/

function reverseWords(str) {

  // type check
  if (typeof str !== 'string') {
    throw new TypeError('reverseWords: Expects single argument of [string] type.');
  }

}

export default reverseWords;
