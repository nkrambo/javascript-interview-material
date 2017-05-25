//
// const card = (rank, suit) => {
//   return {
//     rank,
//     suit
//   };
// }
//
// const shuffle = (state) => ({
//   // fisher yates shuffle algo
//   shuffle: () => {
//     const deck = state.cards;
//
//     for (let i = deck.length - 1; i > 0; i -= 1) {
//       let random = Math.floor(Math.random() * (i + 1));
//       let temp = deck[i];
//       deck[i] = deck[random];
//       deck[random] = temp;
//     }
//   }
// });
//
// const draw = (state) => ({
//   draw: () => {
//     if (state.cards.length === 0) throw new Error('Out of cards!');
//     return state.cards.pop();
//   }
// });
//
// const drawHand = (state, number) => ({
//   drawHand: () => {
//     const hand = [];
//
//     // type check
//     if (typeof number !== 'number') {
//       throw new TypeError('drawHand: Expects single argument of [Number] type.');
//     }
//
//     // not enough cards
//     if (number > state.cards.length) {
//       throw new Error('Not enough cards left in deck');
//     }
//
//     // build hand
//     for (let i = 0; i < number; i += 1) {
//       hand.push(state.cards.pop());
//     }
//
//     return hand;
//   }
// });
//
// const deck = (jokers) => {
//   let state = {
//     cards: [],
//     suits: ['Diamonds', 'Spades', 'Clubs', 'Hearts'],
//     ranks: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
//     jokers
//   };
//
//   if (this.state.jokers) {
//     this.state.cards.push('Joker');
//     this.state.cards.push('Joker');
//   }
//
//   this.shuffle(state);
//
//   return Object.assign(
//     {},
//     draw(state),
//     drawHand(state, number),
//     shuffle(state)
//   );
// }
