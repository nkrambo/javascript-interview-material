
import { expect } from 'chai';
import clearBit from '../clear_bit';

describe('clearBit()', () => {
  // binary numbers:
  // expect(setBit(00000110, 00000010)).to.equal(00000010);
  it('should clear the bit at index i', () => {
    expect(clearBit(6, 2)).to.equal(2);
  });
});
