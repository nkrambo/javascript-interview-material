
import { expect } from 'chai';
import subsetSum from '../subset_sum';

describe('subsetSum()', () => {
  it('should return true if a subset exists that sums to total', () => {
    expect(subsetSum([2, 3, 7, 8, 10], 11)).to.be.true;
    expect(subsetSum([2, 3, 7, 8, 10], 5)).to.be.true;
  });

  it('should return false if a subset does not exists that sums to total', () => {
    expect(subsetSum([2, 3, 7, 8, 10], 14)).to.be.false;
    expect(subsetSum([2, 3, 7, 8, 10], 1)).to.be.false;
  });
});
