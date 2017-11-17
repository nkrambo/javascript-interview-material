
import { isInterleaveRecursive, isInterleave } from '../interleaving_string';

describe.skip('isInterleaveRecursive()', () => {
  test('should return TRUE if s3 is formed by the interleaving of s1 and s2', () => {
    expect(isInterleaveRecursive('aab', 'axy', 'aaxaby')).toBeTruthy();
    expect(isInterleaveRecursive('aabcc', 'dbbca', 'aadbbcbcac')).toBeTruthy();
  });

  test('should return FALSE if s3 is not formed by the interleaving of s1 and s2', () => {
    expect(isInterleaveRecursive('aab', 'axy', 'abaaxy')).toBeFalsy();
    expect(isInterleaveRecursive('aabcc', 'dbbca', 'aadbbbaccc')).toBeFalsy();
    expect(isInterleaveRecursive('abc', 'def', 'abcde')).toBeFalsy();
  });
});

describe('isInterleave()', () => {
  test('should return TRUE if s3 is formed by the interleaving of s1 and s2', () => {
    expect(isInterleave('aab', 'axy', 'aaxaby')).toBeTruthy();
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toBeTruthy();
  });

  test('should return FALSE if s3 is not formed by the interleaving of s1 and s2', () => {
    expect(isInterleave('aab', 'axy', 'abaaxy')).toBeFalsy();
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toBeFalsy();
    expect(isInterleave('abc', 'def', 'abcde')).toBeFalsy();
  });
});
