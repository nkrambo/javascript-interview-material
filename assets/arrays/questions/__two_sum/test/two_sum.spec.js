
import { expect } from 'chai';
import { twoSumBrute } from '../two_sum';

describe('twoSumBrute()', () => {
  it('should find all unique pairs which sum to target', () => {
    expect(twoSumBrute([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });

  it('should throw an error if nums is less than 2', () => {
    expect(function(){ twoSumBrute([1]); }).to.throw(Error);
  });

  it('should throw a type error', () => {
    expect(function(){ twoSumBrute(null); }).to.throw(TypeError);
    expect(function(){ twoSumBrute(undefined); }).to.throw(TypeError);
    expect(function(){ twoSumBrute('string'); }).to.throw(TypeError);
  });
});
