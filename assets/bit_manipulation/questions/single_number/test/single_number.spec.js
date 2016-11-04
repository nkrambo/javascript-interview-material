
import { expect } from 'chai';
import singleNumber from '../single_number';

describe('singleNumber()', () => {
  it('should return a unique value from an array of duplicate values', () => {
    expect(singleNumber([1, 1, 2, 2, 3, 3, 4])).to.equal(4);
    expect(singleNumber([1, 1, 2, 3, 3, 4, 4])).to.equal(2);
    expect(singleNumber([-1, -1, -2, 3, 3, 4, 4])).to.equal(-2);
    expect(singleNumber([15, 63, 9, 63, 1, 15, 1])).to.equal(9);
  });

  it('should return null if there is no unique value', () => {
    expect(singleNumber([1, 1, 2, 2, 3, 3, 4, 4])).to.equal(null);
  });
});
