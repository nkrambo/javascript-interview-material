
import { expect } from 'chai';
import { minCoinsBottomUp, minCoinsBottomUpAlt, MinCoinsTopDown } from '../coin_change_II';


describe('minCoinsBottomUp()', () => {
  it('should return the minimum amount of coins required to make change', () => {

    // 5, 6
    expect(minCoinsBottomUp(11, [1, 5, 6, 8])).to.equal(2);

    // 6
    expect(minCoinsBottomUp(6, [1, 5, 6, 8])).to.equal(1);

    // 1, 1, 1, 1
    expect(minCoinsBottomUp(4, [1, 5, 6, 8])).to.equal(4);
  });
});

// describe('minCoinsBottomUpAlt()', () => {
//   it('should return the minimum amount of coins required to make change', () => {
//
//     // 5, 6
//     expect(minCoinsBottomUpAlt(11, [1, 5, 6, 8])).to.equal(2);
//
//     // 6
//     expect(minCoinsBottomUpAlt(6, [1, 5, 6, 8])).to.equal(1);
//
//     // 1, 1, 1, 1
//     expect(minCoinsBottomUpAlt(4, [1, 5, 6, 8])).to.equal(4);
//   });
// });

describe('MinCoinsTopDown()', () => {
  it('should return the minimum amount of coins required to make change', () => {

    const change = new MinCoinsTopDown();

    // 5, 6
    expect(change.minCoins(11, [1, 5, 6, 8])).to.equal(2);

    // 6
    expect(change.minCoins(6, [1, 5, 6, 8])).to.equal(1);

    // 1, 1, 1, 1
    expect(change.minCoins(4, [1, 5, 6, 8])).to.equal(4);
  });
});
