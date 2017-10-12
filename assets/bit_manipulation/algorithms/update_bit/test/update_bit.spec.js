
import updateBit from '../update_bit';

describe('updateBit()', () => {
  test('should updateBit the bit at index i', () => {
    expect(updateBit(6, 3, true)).toBe(14);
    expect(updateBit(6, 2)).toBe(2);
  });
});
