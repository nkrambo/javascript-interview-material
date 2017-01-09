
import { expect } from 'chai';
import longestCommonSub from '../longest_common_subsequence';

describe('longestCommonSub()', () => {
  it('should return the longest common subsequence', () => {
    // 'abcf'
    expect(longestCommonSub('abcdaf', 'acbcf')).to.equal(4);

    // 'a'
    expect(longestCommonSub('bcdaf', 'apwqsx')).to.equal(1);
  });
});
