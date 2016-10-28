
/**
* Single Riffle Shuffle
*
* Types:
*
* I suspect the online poker game I'm playing shuffles cards by doing a single riffle.
*
* To prove this, let's write a function to tell us if a full deck of cards shuffledDeck
* is a single riffle of two other halves h1 and h2.
*
* We'll represent a stack of cards as an array of integers in the range 1..52
* (since there are 52 distinct cards in a deck).
*
* Here's a rigorous definition of the riffle algorithm:
*
* 1. Cut the deck into halves h1 and h2.
*
* 2. Grab a random number of cards from the top of h1 (could be 0, must be
*    less than or equal to the number of cards left in h1) and throw them into
*    the shuffledDeck.
*
* 3. Grab a random number of cards from the top of h2 (could be 0, must be less
*    than or equal to the number of cards left in h2) and throw them into the shuffledDeck.
*
* 4. Repeat steps 2-3 until h1 and h2 are empty.
*
*/

/**
* singleRiffleShuffle()
*
* Solution:
*
* We can start by trying to break the problem into subproblems.
* This will clearly involve reducing the size of at least one of our stacks of cards.
* So to start, let's try taking the first card out of shuffledDeck.
*
* If shuffledDeck is a riffle of h1 and h2, then the first card from shuffledDeck should
* be either the same as the first card from h1 or the same as the first card from h2.
*
* We walk through shuffledDeck, seeing if each card so far could have come from a riffle
* of the other two halves. To check this, we:
*
* 1. Keep pointers to the current index in h1, h2, and shuffledDeck.
*
* 2. Walk through shuffledDeck from beginning to end.
*
* 3. If the current card in shuffledDeck is the same as the top card from h1,
*    increment h1Index and keep going. This can be thought of as 'throwing out' the top cards
*    of h1 and shuffledDeck, reducing the problem to the remaining cards in the stacks.
*
* 4. Same as above with h2.
*
* 5. If the current card isn't the same as the card at the top of h1 or h2,
*    we know we don't have a single riffle.
*
* 6. If we make it all the way to the end of shuffledDeck and each card checks out,
*    we know we do have a single riffle.
*
* Time: O(n)
* Space: O(1)
* Where n is the length shuffledDeck.
*
* @param {array} h1 first half of deck, (n) length (0 - 52)
* @param {array} h2 second half of deck, (n) length (0 - 52)
* @param {array} shuffledDeck an array of 52 cards
* @return {boolean} returns true if shuffledDeck is a single riffle of h1 and h2
*/

function isSingleRiffle(h1, h2, shuffledDeck) {

  // type check
  if (!Array.isArray(h1) || !Array.isArray(h2) || !Array.isArray(shuffledDeck)) {
    throw new TypeError('isSingleRiffle: Expects 3 arguments of [array] type.');
  }

  let h1Index = 0;
  let h2Index = 0;
  const h1End = h1.length - 1;
  const h2End = h2.length - 1;

  for (let i = 0; i < shuffledDeck.length; i += 1) {
    const card = shuffledDeck[i];

    // h1 is not empty, and 'top' of h1 === 'top' of shuffledDeck
    if (h1Index <= h1End && card === h1[h1Index]) {
      h1Index += 1;

    // h2 is not empty, and 'top' of h2 === 'top' of shuffledDeck
    } else if (h2Index <= h2End && card === h2[h2Index]) {
      h2Index += 1;

    // if the 'top' card in shuffledDeck doesn't match the top
    // card in h1 or h2, this isn't a single riffle.
    } else {
      return false;
    }
  }

  // all cards in shuffledDeck have been "accounted for", single riffle!
  return true;
}

export default isSingleRiffle;
