
import { expect } from 'chai';
import coinMinimum from '../coin_change_II';


describe('coinMinimum()', () => {
  it('should return the minimum amount of coins required to make change', () => {

    // 5, 6
    expect(coinMinimum(11, [1, 5, 6, 8])).to.equal(2);

    // // 6
    // expect(coinMinimum(6, [1, 5, 6, 8])).to.equal(1);
    //
    // // 1, 1, 1, 1
    // expect(coinMinimum(4, [1, 5, 6, 8])).to.equal(4);
  });
});
