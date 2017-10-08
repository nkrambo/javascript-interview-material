
import { expect } from 'chai';
import { isAnagram, isAnagramSort } from '../valid_anagram';

describe('isAnagram()', () => {
  test('should return true for a permutation', () => {
    expect(isAnagram('dog', 'god')).to.be.true;
    expect(isAnagram('abcd', 'bdca')).to.be.true;
    expect(isAnagram('cat', 'cat')).to.be.true;
  });

  test('should return false for strings of different length', () => {
    expect(isAnagram('abcd', 'abc')).to.be.false;
  });

  test('should return false for non permutations of same length', () => {
    expect(isAnagram('abcd', 'zqwe')).to.be.false;
    expect(isAnagram('a', 'b')).to.be.false;
  });
});

describe('isAnagramSort()', () => {
  test('should return true for a permutation', () => {
    expect(isAnagramSort('dog', 'god')).to.be.true;
    expect(isAnagramSort('abcd', 'bdca')).to.be.true;
    expect(isAnagramSort('cat', 'cat')).to.be.true;
  });

  test('should return false for strings of different length', () => {
    expect(isAnagramSort('abcd', 'abc')).to.be.false;
  });

  test('should return false for non permutations of same length', () => {
    expect(isAnagramSort('abcd', 'zqwe')).to.be.false;
    expect(isAnagramSort('a', 'b')).to.be.false;
  });
});
