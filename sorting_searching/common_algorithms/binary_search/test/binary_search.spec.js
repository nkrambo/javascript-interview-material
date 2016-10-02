
import binarySearch from '../binary_search';
import { expect } from 'chai';

describe('binary search', () => {
  const myArray = [1, 2, 3, 4, 5];

  it('should return a number', () => {
    expect(binarySearch(myArray, 4)).to.be.a('number');
  });

  it('should return correct result', () => {
    expect(binarySearch(myArray, 4)).to.equal(3);
  });
  //
  // it('should return -1 if not found', () => {
  //   expect(binarySearch(myArray, 6)).to.equal(-1);
  // });
});