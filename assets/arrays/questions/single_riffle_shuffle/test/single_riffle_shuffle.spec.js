

import isSingleRiffle from '../single_riffle_shuffle';

describe('isSingleRiffle()', () => {
  function shuffle(deck) {
    let current = deck.length;
    let temp;
    let random;

    // While there remain elements to shuffle...
    while (current > 0) {
      // Pick a remaining element...
      random = Math.floor(Math.random() * current);
      current -= 1;

      // And swap it with the current element.
      temp = deck[current];
      deck[current] = deck[random];
      deck[random] = temp;
    }

    return deck;
  }

  function riffle(deck) {
    const riffled = [];
    const h1 = deck.slice(0, 26);
    const h2 = deck.slice(26);

    for (let i = 0; i < deck.length; i += 1) {
      if (i % 2 === 0) {
        riffled.push(h1.shift());
      } else {
        riffled.push(h2.shift());
      }
    }
    return riffled;
  }

  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['C', 'S', 'D', 'H'];

  const deck = [];
  for (let i = 0; i < suits.length; i += 1) {
    for (let j = 0; j < ranks.length; j += 1) {
      deck.push(`${ranks[j]}${suits[i]}`);
    }
  }

  const shuffled = shuffle(deck); // randomly shuffle
  const riffledDeck = riffle(shuffled); // riffle shuffle

  test('should return true if shuffledDeck is a single riffle', () => {
    expect(isSingleRiffle(riffledDeck.slice(0, 26), riffledDeck.slice(26), riffledDeck)).to.be.true;
  });

  test('should return false if shuffledDeck is not a single riffle', () => {
    expect(isSingleRiffle(shuffle(shuffled.slice(0, 26)), shuffled.slice(26), shuffled)).to.be.false;
  });
});
