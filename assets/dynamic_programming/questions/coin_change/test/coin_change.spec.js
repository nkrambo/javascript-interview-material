
import { expect } from 'chai';
import coinChange from '../coin_change';

describe('coinChange()', () => {
  it('should return all possible methods to make change', () => {
    expect(coinChange(4, [1, 2, 3])).to.equal(4);
  });
});
