
import setBit from '../set_bit';

describe('setBit()', () => {
  test('should set the bit at index i', () => {
    expect(setBit(6, 5)).toBe(38);
  });
});
