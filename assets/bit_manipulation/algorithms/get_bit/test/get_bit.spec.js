

import getBit from '../get_bit';

describe('getBtest()', () => {
  test('should get the bit at index i', () => {
    expect(getBtest(6, 2)).toBeTruthy();
    expect(getBtest(6, 3)).toBeFalsy();
  });
});
