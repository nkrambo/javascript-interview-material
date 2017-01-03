
/**
* Reverse Words
*
* Tags: Two Pointer
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
* When writing your function, assume the message contains only letters
* and spaces, and all words are separated by one space.
*
* Example:
*
* const message = 'find you will pain only go you recordings security the into if';
*
* reverseWords(message);
* returns: 'if into the security recordings you go only pain will you find'
*/

/**
* reverseWords()
*
* Solution:
*
* Since strings in JavaScript are immutable, first convert the string into an array
* of characters, do the in-place reversal on that array, and re-join that array
* into a string before returning it. This isn't technically 'in-place' and the
* array of characters will cost O(n) additional space, but it's a
* reasonable way to stay within the spirit of the challenge.
*
* So the more expected solution would be as follows.
*
* At first glance, you might think that the best solution would be to swap words by index.
* There are a couple of problems with this.
*
* 1. How do we figure out where words begin and end?
* 2. Once we know the start and end indices of two words, how do we swap those two words?
*
* More importantly, the best runtime we could do is O(n^2).
*
* Assume we'll be able to learn the start and end indices of
* all of our words in just one pass, O(n).
*
* In the worst case we have almost as many words as we have characters, and we're always
* swapping words of different lengths. For example, 'a bb c dd e ff g hh'.
*
* The best approach is to actually reverse every character in the entire string and
* then re-reverse every word in the string. This will run O(n).
*
* For example:
*
* 'the eagle has landed' // input
* 'dednal sah elgae eht' // character-reversed
* 'landed has eagle the' // word-reversed (desired output)
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
* Our space cost comes from converting the message string to an array.
* If our input was an array, our space cost would be O(1) because we'd
* be using a constant amount of additional space beyond the input.
*
* @param {string} str String of (n) length, with multiple words
* @return {string} returns a reversed version of the input string
*/

function reverseWords(str) {

  // first we reverse all the characters in the entire message
  const msg = str.split('');
  reverseCharacters(msg, 0, msg.length - 1);

  // this gives us the right word order
  // but with each word backwards

  // now we'll make the words forward again
  // by reversing each word's characters

  // we hold the index of the /start/ of the current word
  // as we look for the /end/ of the current word
  let wordStart = 0;
  for (let i = 0; i <= msg.length; i += 1) {

    // found the end of the current word!
    if (i === msg.length || msg[i] === ' ') {
      // if we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(msg, wordStart, i - 1);
      wordStart = i + 1;
    }
  }

  return msg.join('');
}

/**
* reverseCharacters()
*
* @param {array} msg array of characters
* @param {number} start start index of msg (usually 0)
* @param {number} end end index of msg (msg.length - 1)
*/

function reverseCharacters(msg, start, end) {
  // walk towards the middle, from both sides
  while (start < end) {

    // swap the front char and back char
    let temp = msg[start];
    msg[start] = msg[end];
    msg[end] = temp;
    start += 1;
    end -= 1;
  }
}

export default reverseWords;
