

import longestCommonSubStr from '../longest_common_substring';

describe('longestCommonSubStr()', () => {
  test('should return the longest common substring', () => {
    // bcd
    expect(longestCommonSubStr('abcdaf', 'zbcdf')).toBe(3);

    // 0
    expect(longestCommonSubStr('abcd', 'xywq')).toBe(0);

    // cd
    expect(longestCommonSubStr('abcdqw', 'ssacdkop')).toBe(2);
  });
});
