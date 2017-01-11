
import { expect } from 'chai';
import longestCommonSubStr from '../longest_common_substring';

describe('longestCommonSubStr()', () => {
  it('should return the longest common substring', () => {

    // bcd
    expect(longestCommonSubStr('abcdaf', 'zbcdf')).to.equal(3);

    // 0
    expect(longestCommonSubStr('abcd', 'xywq')).to.equal(0);

    // cd
    expect(longestCommonSubStr('abcdqw', 'ssacdkop')).to.equal(2);
  });
});
