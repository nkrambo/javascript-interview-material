
/**
* Deck of Cards
*
* Design the data structures for a generic deck of cards. Explain how you would
* subclass the data structures to implement Blackjack.
*
* Solution:
*
* With any object oriented design questions, you will want to clarify some details
* about the question so you head off in the right direction in your solution.
*
* We'll assume that the interviewer means that a 'generic' deck of cards means a
* standard 52 card deck, like used to play poker or Blackjack, and not something
* like an Uno deck, for example.
*/

// class Card {
//   constructor(rank, suit) {
//     this.rank = rank;
//     this.suit = suit;
//   }
// }
//
// class Deck {
//   constructor(jokers) {
//     this.cards = [];
//     this.suits = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
//     this.ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
//
//     // build deck
//     for (let i = 0; i < this.suits.length; i += 1) {
//       for (let j = 0; j < this.ranks.length; j += 1) {
//         const card = new Card(this.ranks[j], this.suits[i]);
//         this.cards.push(card);
//       }
//     }
//
//     // add jokers if option passed in at construction
//     if (jokers) {
//       this.cards.push('Joker');
//       this.cards.push('Joker');
//     }
//
//     // shuffle on construction
//     this.shuffle();
//   }
//
//   // fisher yates shuffle algo
//   shuffle() {
//     const deck = this.cards;
//
//     for (let i = deck.length - 1; i > 0; i -= 1) {
//       let random = Math.floor(Math.random() * (i + 1));
//       let temp = deck[i];
//       deck[i] = deck[random];
//       deck[random] = temp;
//     }
//   }
//
//   draw() {
//     // out of cards
//     if (this.cards.length === 0) throw new Error('Out of cards!');
//
//     return this.cards.pop();
//   }
//
//   drawHand(number) {
//     const hand = [];
//
//     // type check
//     if (typeof number !== 'number') {
//       throw new TypeError('drawHand: Expects single argument of [Number] type.');
//     }
//
//     // not enough cards
//     if (number > this.cards.length) {
//       throw new Error('Not enough cards left in deck');
//     }
//
//     // build hand
//     for (let i = 0; i < number; i += 1) {
//       hand.push(this.cards.pop());
//     }
//
//     return hand;
//   }
// }
//
// class BlackJack {
//   constructor() {
//     this.player = {
//       hand: null,
//       score: null
//     };
//     this.dealer = {
//       hand: null,
//       score: null
//     };
//     this.shoe = new Deck();
//     this.deal();
//   }
//
//   // // deal
//   // deal() {
//   //   this.player.hand = this.shoe.drawHand(2);
//   //   this.dealer.hand = this.shoe.draw();
//   //   this.calculateScore();
//   // }
//   //
//   // calculateScore(hand) {
//   //   if ()
//   // }
//   //
//   // // hit
//   // htest() {
//   //
//   // }
//   //
//   // // stay
//   // stay() {
//   //
//   // }
//   //
//   // // deal
//   // // player plays out blackjack, hit, stay or bust
//   // // dealer plays out blackjack, hit, bust
//
// }
//
// export { Deck, Card, BlackJack };
