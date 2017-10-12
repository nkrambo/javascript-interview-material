

import flipBitToWin from '../flip_bit_to_win';

describe('flipBitToWin()', () => {
  test(
    'should return the longest sequence of 1 bits with a single bit flip',
    () => {
      expect(flipBitToWin(1775)).toBe(8);
      expect(flipBitToWin(905)).toBe(4);
    }
  );
});
