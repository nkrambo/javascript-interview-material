
import { expect } from 'chai';
import updateBit from '../update_bit';

describe('updateBtest()', () => {
  test('should updateBit the bit at index i', () => {
    expect(updateBtest(6, 3, true)).to.equal(14);
    expect(updateBtest(6, 2)).to.equal(2);
  });
});
