

import setBit from '../set_bit';

describe('setBtest()', () => {
  test('should set the bit at index i', () => {
    expect(setBtest(6, 5)).toBe(38);
  });
});
