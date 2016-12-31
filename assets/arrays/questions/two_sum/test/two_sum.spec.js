
import { expect } from 'chai';
import { twoSumBrute, twoSumHash } from '../two_sum';

describe('twoSumBrute()', () => {
  it('should find all unique pairs which sum to target', () => {
    expect(twoSumBrute([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });

  it('should throw an error if nums is less than 2', () => {
    expect(function(){ twoSumBrute([1]); }).to.throw(Error);
  });
});

describe('twoSumHash()', () => {
  it('should find all unique pairs which sum to target', () => {
    expect(twoSumHash([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });
});
