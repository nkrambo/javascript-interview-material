
import { expect } from 'chai';
import productOfOthers from '../product_of_other_numbers';

describe('productOfOthers()', () => {
  it('should return the product of all other elements', () => {
    expect(productOfOthers([1, 7, 3, 4])).to.deep.equal([84, 12, 28, 21]);
    expect(productOfOthers([1, 1, 1])).to.deep.equal([1, 1, 1]);
  });

  it('should throw an error if the array is less than 3 elements', () => {
    expect(function(){ productOfOthers([1, 2]); }).to.throw (Error);
    expect(function(){ productOfOthers([1]); }).to.throw (Error);
  });

  it('should throw a type error', () => {
    expect(function(){ productOfOthers(null); }).to.throw (TypeError);
    expect(function(){ productOfOthers(undefined); }).to.throw (TypeError);
    expect(function(){ productOfOthers(5); }).to.throw (TypeError);
  });
});
