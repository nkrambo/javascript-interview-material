
import { expect } from 'chai';
import {
  longestSubstringBrute,
  allUnique,
  longestSubstring,
  longestSubstringMap,
} from '../longest_substring_no_repeats';

describe('longestSubstringBrute()', () => {
  it('should find the longest substring with no repeating characters', () => {
    expect(longestSubstringBrute('abcabcbb')).to.equal(3);
    expect(longestSubstringBrute('bbbbb')).to.equal(1);
    expect(longestSubstringBrute('pwwkew')).to.equal(3);
    expect(longestSubstringBrute('c')).to.equal(1);
    expect(longestSubstringBrute('au')).to.equal(2);
    expect(longestSubstringBrute('dvdf')).to.equal(3);
  });
});

describe('allUnique()', () => {
  it('should return true if all characters of a string are unique', () => {
    expect(allUnique('abc', 0, 2)).to.be.true;
    expect(allUnique('a', 0, 0)).to.be.true;
    expect(allUnique('ab', 0, 1)).to.be.true;
  });

  it('should return false if all characters of a string are NOT unique', () => {
    expect(allUnique('aa', 0, 2)).to.be.false;
    expect(allUnique('abca', 0, 4)).to.be.false;
    expect(allUnique('aaaaa', 0, 5)).to.be.false;
  });
});

// describe('longestSubstring()', () => {
//   it('should find the longest substring with no repeating characters', () => {
//     expect(longestSubstring('abcabcbb')).to.equal(3);
//     expect(longestSubstring('bbbbb')).to.equal(1);
//     expect(longestSubstring('pwwkew')).to.equal(3);
//     expect(longestSubstring('c')).to.equal(1);
//     expect(longestSubstring('au')).to.equal(2);
//     expect(longestSubstring('dvdf')).to.equal(3);
//   });
// });

describe('longestSubstringMap()', () => {
  it('should find the longest substring with no repeating characters', () => {
    expect(longestSubstringMap('abcabcbb')).to.equal(3);
    expect(longestSubstringMap('bbbbb')).to.equal(1);
    expect(longestSubstringMap('pwwkew')).to.equal(3);
    expect(longestSubstringMap('c')).to.equal(1);
    expect(longestSubstringMap('au')).to.equal(2);
    expect(longestSubstringMap('dvdf')).to.equal(3);
  });
});
