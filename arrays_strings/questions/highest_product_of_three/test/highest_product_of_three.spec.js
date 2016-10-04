
import { expect } from 'chai';
import highestProductOf3 from '../highest_product_of_three';

describe('highestProductOf3()', () => {
  it('should return the highest product of 3', () => {
    const arr = [3, 2, 7, 0, 0, 1, 23, 2];
    expect(highestProductOf3(arr)).to.equal(483);
  });

  it('should throw an error if array is less than 3', () => {
    const arr = [3, 2];
    expect(function(){ highestProductOf3 (arr); }).to.throw (Error);
  });

});
