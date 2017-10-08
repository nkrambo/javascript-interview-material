
import { expect } from 'chai';
import { twoSumBrute, twoSumMap } from '../two_sum';

// brute
describe('twoSumBrute()', () => {
  test('should return the indices that add up to target', () => {
    expect(twoSumBrute([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSumBrute([1, 2], 3)).to.deep.equal([0, 1]);
    expect(twoSumBrute([1, 2, 5, 6], 11)).to.deep.equal([2, 3]);
  });

  test('should return an empty array if no values add up to ', () => {
    expect(twoSumBrute([1, 2, 3, 4], 15)).to.deep.equal([]);
  });
});

// map
describe('twoSumMap()', () => {
  test('should return the indices that add up to target', () => {
    expect(twoSumMap([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
    expect(twoSumMap([1, 2], 3)).to.deep.equal([0, 1]);
    expect(twoSumMap([1, 2, 5, 6], 11)).to.deep.equal([2, 3]);
  });

  test('should return an empty array if no values add up to ', () => {
    expect(twoSumMap([1, 2, 3, 4], 15)).to.deep.equal([]);
  });
});
