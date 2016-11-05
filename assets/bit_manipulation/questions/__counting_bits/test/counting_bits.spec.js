
import { expect } from 'chai';
import countingBits from '../counting_bits';

describe('countingBits()', () => {
  it('should return ', () => {
    expect(countingBits(5)).to.deep.equal([0, 1, 1, 2, 1, 2]);
  });
});
