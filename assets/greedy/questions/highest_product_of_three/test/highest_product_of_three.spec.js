
import { expect } from 'chai';
import highestProduct from '../highest_product_of_three';

describe('highestProduct()', () => {
  it('should return the highest product of 3', () => {
    const arr = [3, 2, 7, 0, 0, 1, 23, 2];
    expect(highestProduct(arr)).to.equal(483);
  });

  it('should throw an error if array is less than 3', () => {
    const arr = [3, 2];
    expect(function(){ highestProduct (arr); }).to.throw (Error);
  });

});
