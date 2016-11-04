
import { expect } from 'chai';
import getBit from '../get_bit';

describe('getBit()', () => {
  it('should get the bit at index i', () => {
    // binary numbers:
    // expect(setBit(00000110, 00000010)).to.be.true;
    expect(getBit(6, 2)).to.be.true;

    // binary numbers:
    // expect(setBit(00000110, 00000011)).to.be.false;
    expect(getBit(6, 3)).to.be.false;
  });
});
