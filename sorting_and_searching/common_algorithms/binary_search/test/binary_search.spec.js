
import { expect } from 'chai';
import binarySearch from '../binary_search';

describe('binary search', () => {
  it('should return the correct index of searched integer if found', () => {
    const test = [1, 2, 3, 4, 5];
    expect(binarySearch(test, 4)).to.be.true;
  });

  it('should return -1 if the value is not present', () => {
    const test = [1, 2, 3, 4, 5];
    expect(binarySearch(test, 6)).to.be.false;
  });
});
