
import { expect } from 'chai';
import countingBits from '../counting_bits';

describe('countingBits()', () => {
  it('should return the count of 1 bits for every number in the range 0 ≤ i ≤ num', () => {
    expect(countingBits(5)).to.deep.equal([0, 1, 1, 2, 1, 2]);
    expect(countingBits(0)).to.deep.equal([0]);
  });
});
