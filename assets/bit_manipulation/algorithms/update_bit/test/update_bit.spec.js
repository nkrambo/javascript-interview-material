
import { expect } from 'chai';
import updateBit from '../update_bit';

describe('updateBit()', () => {
  it('should updateBit the bit at index i', () => {
    expect(updateBit(6, 3, true)).to.equal(14);
    expect(updateBit(6, 2)).to.equal(2);
  });
});
