
import { expect } from 'chai';
import longestIncreasingSub from '../longest_increasing_subsequence';

describe('longestIncreasingSub()', () => {
  it('should return the longest increasing subsequence', () => {

    // [-1, 0, 2, 3]
    expect(longestIncreasingSub([3, 4, -1, 0, 6, 2, 3])).to.equal(4);

    // [2, 5, 8]
    expect(longestIncreasingSub([2, 5, 1, 8, 3])).to.equal(3);
  });
});
