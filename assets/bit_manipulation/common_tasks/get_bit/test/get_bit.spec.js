
import { expect } from 'chai';
import getBit from '../get_bit';

describe('getBit()', () => {
  it('should get the bit at index i', () => {
    expect(getBit(6, 2)).to.be.true;
    expect(getBit(6, 3)).to.be.false;
  });
});
