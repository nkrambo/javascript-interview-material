
import { expect } from 'chai';
import conversion from '../conversion';

describe('conversion()', () => {
  it('should return the number of bit flips required to convert integer a to b.', () => {
    expect(conversion(29, 15)).to.equal(2);
  });
});
