
import clearBit from '../clear_bit';

describe('clearBit()', () => {
  // binary numbers:
  // expect(setBtest(00000110, 00000010)).toBe(00000010);
  test('should clear the bit at index i', () => {
    expect(clearBit(6, 2)).toBe(2);
  });
});
