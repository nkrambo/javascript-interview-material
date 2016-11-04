
import { expect } from 'chai';
import setBit from '../set_bit';

describe('setBit()', () => {
  it('should set the bit at index i', () => {
    // binary numbers:
    // expect(setBit(00000110, 00000101)).to.equal(00100110);
    expect(setBit(6, 5)).to.equal(38);
  });
});
