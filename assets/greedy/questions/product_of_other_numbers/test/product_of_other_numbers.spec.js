
import { expect } from 'chai';
import productOfOthers from '../product_of_other_numbers';

describe('productOfOthers()', () => {
  it('should return the product of all other elements', () => {
    expect(productOfOthers([1, 7, 3, 4])).to.deep.equal([84, 12, 28, 21]);
    expect(productOfOthers([1, 1, 1])).to.deep.equal([1, 1, 1]);
  });

  it('should throw an error if the array is less than 3 elements', () => {
    expect(() => { productOfOthers([1, 2]); }).to.throw(Error);
    expect(() => { productOfOthers([1]); }).to.throw(Error);
  });
});
