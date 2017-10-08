
import { expect } from 'chai';
import conversion from '../conversion';

describe('conversion()', () => {
  test(
    'should return the number of bit flips required to convert integer a to b.',
    () => {
      expect(conversion(29, 15)).to.equal(2);
      expect(conversion(41, 124)).to.equal(4);
      expect(conversion(1, 0)).to.equal(1);
      expect(conversion(1, 1)).to.equal(0);
    }
  );
});
