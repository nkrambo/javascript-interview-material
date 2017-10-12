

import clearBit from '../clear_bit';

describe('clearBtest()', () => {
  // binary numbers:
  // expect(setBtest(00000110, 00000010)).toBe(00000010);
  test('should clear the bit at index i', () => {
    expect(clearBtest(6, 2)).toBe(2);
  });
});
