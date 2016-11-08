
import { expect } from 'chai';
import reverseBits from '../reverse_bits';

describe('reverseBits()', () => {
  it('should return reverse of a 32-bit unsigned integer', () => {
    expect(reverseBits(43261596)).to.be.equal(964176192);
  });
});
