
import { expect } from 'chai';
import { hammingWeight, hammingWeightFlip } from '../hamming_weight';

describe('hammingWeight()', () => {
  it('should return the hamming weight of an unsigned integer', () => {
    expect(hammingWeight(11)).to.equal(3);
    expect(hammingWeight(9)).to.equal(2);
  });
});

describe('hammingWeightFlip()', () => {
  it('should return the hamming weight of an unsigned integer', () => {
    expect(hammingWeightFlip(11)).to.equal(3);
    expect(hammingWeight(9)).to.equal(2);
  });
});
