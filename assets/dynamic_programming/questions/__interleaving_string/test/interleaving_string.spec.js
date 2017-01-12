
import { expect } from 'chai';
import isInterleave from '../interleaving_string';

describe('isInterleave()', () => {
  it('should return true if s3 is formed by the interleaving of s1 and s2', () => {
    expect(isInterleave('aab', 'axy', 'aaxaby')).to.be.true;
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).to.be.true;
  });

  it('should return false if s3 is not formed by the interleaving of s1 and s2', () => {
    expect(isInterleave('aab', 'axy', 'abaaxy')).to.be.false;
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).to.be.false;
    expect(isInterleave('abc', 'def', 'abcde')).to.be.false;
  });
});
