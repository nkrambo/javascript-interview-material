

import longestCommonSub from '../longest_common_subsequence';

describe('longestCommonSub()', () => {
  test('should return the longest common subsequence', () => {
    // 'abcf'
    expect(longestCommonSub('abcdaf', 'acbcf')).toBe(4);

    // 'a'
    expect(longestCommonSub('bcdaf', 'apwqsx')).toBe(1);
  });
});
