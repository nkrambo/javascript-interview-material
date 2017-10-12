

import conversion from '../conversion';

describe('conversion()', () => {
  test(
    'should return the number of bit flips required to convert integer a to b.',
    () => {
      expect(conversion(29, 15)).toBe(2);
      expect(conversion(41, 124)).toBe(4);
      expect(conversion(1, 0)).toBe(1);
      expect(conversion(1, 1)).toBe(0);
    }
  );
});
