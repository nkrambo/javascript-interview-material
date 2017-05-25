
import { expect } from 'chai';
import setBit from '../set_bit';

describe('setBit()', () => {
  it('should set the bit at index i', () => {
    expect(setBit(6, 5)).to.equal(38);
  });
});
