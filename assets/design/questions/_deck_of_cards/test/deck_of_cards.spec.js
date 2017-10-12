//

// import { Deck, Card, BlackJack } from '../deck_of_cards_class';
//
// describe('Card', () => {
//   test('should set the suit and rank of card ', () => {
//     const card = new Card('A', 'Spades');
//     expect(card).to.be.a('object');
//     expect(card.suit).to.equal('Spades');
//     expect(card.rank).to.equal('A');
//   });
// });
//
// describe('Deck', () => {
//   test('should have a full deck of 52 cards', () => {
//     const deck = new Deck();
//     expect(deck.cards.length).to.equal(52);
//   });
//
//   test('should have a full deck of 54 cards when the jokers are added', () => {
//     const deck = new Deck(true);
//     expect(deck.cards.length).to.equal(54);
//   });
//
//   test('should return a card when we call draw() method', () => {
//     const deck = new Deck();
//     expect(deck.draw()).to.be.a('object');
//     expect(deck.cards.length).to.equal(51);
//   });
//
//   test('should return a hand of cards when we call drawHand() method', () => {
//     const deck = new Deck();
//     const hand = deck.drawHand(4);
//     expect(hand).to.be.a('array');
//     expect(hand.length).to.equal(4);
//   });
// });
//
// // describe('BlackJack', () => {
// //   test('should shuffle ', () => {
// //
// //   });
// // });
