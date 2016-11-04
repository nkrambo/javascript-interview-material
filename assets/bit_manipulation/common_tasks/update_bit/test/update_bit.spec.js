
import { expect } from 'chai';
import updateBit from '../update_bit';

describe('updateBit()', () => {
  it('should updateBit the bit at index i', () => {
    // binary numbers:
    // expect(setBit(00000110, 00000011)).to.equal(00001110);
    expect(updateBit(6, 3, true)).to.equal(14);

    // binary numbers:
    // expect(setBit(00000110, 00000010)).to.equal(00000010);
    expect(updateBit(6, 2)).to.equal(2);
  });
});