
import getBit from '../get_bit';

describe('getBit()', () => {
  test('should get the bit at index i', () => {
    expect(getBit(6, 2)).toBeTruthy();
    expect(getBit(6, 3)).toBeFalsy();
  });
});
