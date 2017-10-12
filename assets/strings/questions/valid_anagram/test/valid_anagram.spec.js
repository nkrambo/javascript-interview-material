
import { expect } from 'chai';
import { isAnagram, isAnagramSort } from '../valid_anagram';

describe('isAnagram()', () => {
  test('should return true for a permutation', () => {
    expect(isAnagram('dog', 'god')).toBeTruthy();
    expect(isAnagram('abcd', 'bdca')).toBeTruthy();
    expect(isAnagram('cat', 'cat')).toBeTruthy();
  });

  test('should return false for strings of different length', () => {
    expect(isAnagram('abcd', 'abc')).toBeFalsy();
  });

  test('should return false for non permutations of same length', () => {
    expect(isAnagram('abcd', 'zqwe')).toBeFalsy();
    expect(isAnagram('a', 'b')).toBeFalsy();
  });
});

describe('isAnagramSort()', () => {
  test('should return true for a permutation', () => {
    expect(isAnagramSort('dog', 'god')).toBeTruthy();
    expect(isAnagramSort('abcd', 'bdca')).toBeTruthy();
    expect(isAnagramSort('cat', 'cat')).toBeTruthy();
  });

  test('should return false for strings of different length', () => {
    expect(isAnagramSort('abcd', 'abc')).toBeFalsy();
  });

  test('should return false for non permutations of same length', () => {
    expect(isAnagramSort('abcd', 'zqwe')).toBeFalsy();
    expect(isAnagramSort('a', 'b')).toBeFalsy();
  });
});
