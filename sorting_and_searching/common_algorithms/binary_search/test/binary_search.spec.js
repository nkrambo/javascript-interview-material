
import { expect } from 'chai';
import binarySearch from '../binary_search';

describe('binary search', () => {
  const myArray = [1, 2, 3, 4, 5];

  it('should return a number', () => {
    expect(binarySearch(myArray, 4)).to.be.a('number');
  });

  it('should return correct result', () => {
    expect(binarySearch(myArray, 4)).to.equal(3);
  });

});
