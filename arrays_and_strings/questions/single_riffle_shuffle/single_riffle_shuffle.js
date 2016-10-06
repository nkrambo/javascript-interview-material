
/**
* Single Riffle Shuffle
*
* I suspect the online poker game I'm playing shuffles cards by doing a single riffle.
*
* To prove this, let's write a function to tell us if a full deck of cards shuffledDeck
* is a single riffle of two other halves half1 and half2.
*
* We'll represent a stack of cards as an array of integers in the range 1..52
* (since there are 52 distinct cards in a deck).
*
* Here's a rigorous definition of the riffle algorithm:
*
* 1. Cut the deck into halves half1 and half2.
*
* 2. Grab a random number of cards from the top of half1 (could be 0, must be
*    less than or equal to the number of cards left in half1) and throw them into
*    the shuffledDeck.
*
* 3. Grab a random number of cards from the top of half2 (could be 0, must be less
*    than or equal to the number of cards left in half2) and throw them into the shuffledDeck.
*
* 4. Repeat steps 2-3 until half1 and half2 are empty.
*
*/

/**
* singleRiffleShuffle()
*
* Solution:
*
* Time: O(n)
* Space: O(n)
* Where n is the length of the string input.
*
* @param {string} str string of (n) length
* @return {boolean} returns true if all characters in string are unique
*/

function isSingleRiffle(h1, h2, shuffledDeck) {
  let half1Index = 0;
  let half2Index = 0;
  let half1MaxIndex = half1.length - 1;
  let half2MaxIndex = half2.length - 1;

  for (let i = 0; i < shuffledDeck.length; i += 1) {
    const card = shuffledDeck[i];

    // if we still have cards in half1
    // and the "top" card in half1 is the same
    // as the top card in shuffledDeck
    if (half1Index <= half1MaxIndex && card === h1[half1Index]) {
      half1Index += 1;

    // if we still have cards in half2
    // and the "top" card in half2 is the same
    // as the top card in shuffledDeck
    } else if (half2Index <= half2MaxIndex && card === h2[half2Index]) {
      half2Index += 1;

    // if the top card in shuffledDeck doesn't match the top
    // card in half1 or half2, this isn't a single riffle.
    } else {
      return false;
    }
  }

  // all cards in shuffledDeck have been "accounted for"
  // so this is a single riffle!
  return true;
}

export default isSingleRiffle;
