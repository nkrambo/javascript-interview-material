
import {
  longestSubstringBrute,
  allUnique,
  longestSubstring,
  longestSubstringMap,
} from '../longest_substring_no_repeated_characters';

describe('longestSubstringBrute()', () => {
  test('should find the longest substring with no repeating characters', () => {
    expect(longestSubstringBrute('abcabcbb')).toBe(3);
    expect(longestSubstringBrute('bbbbb')).toBe(1);
    expect(longestSubstringBrute('pwwkew')).toBe(3);
    expect(longestSubstringBrute('c')).toBe(1);
    expect(longestSubstringBrute('au')).toBe(2);
    expect(longestSubstringBrute('dvdf')).toBe(3);
  });
});

describe('allUnique()', () => {
  test('should return true if all characters of a string are unique', () => {
    expect(allUnique('abc', 0, 2)).toBeTruthy();
    expect(allUnique('a', 0, 0)).toBeTruthy();
    expect(allUnique('ab', 0, 1)).toBeTruthy();
  });

  test(
    'should return false if all characters of a string are NOT unique',
    () => {
      expect(allUnique('aa', 0, 2)).toBeFalsy();
      expect(allUnique('abca', 0, 4)).toBeFalsy();
      expect(allUnique('aaaaa', 0, 5)).toBeFalsy();
    }
  );
});

describe('longestSubstring()', () => {
  test('should find the longest substring with no repeating characters', () => {
    expect(longestSubstring('abcabcbb')).toBe(3);
    expect(longestSubstring('bbbbb')).toBe(1);
    expect(longestSubstring('pwwkew')).toBe(3);
    expect(longestSubstring('c')).toBe(1);
    expect(longestSubstring('au')).toBe(2);
    expect(longestSubstring('dvdf')).toBe(3);
  });
});

describe('longestSubstringMap()', () => {
  test('should find the longest substring with no repeating characters', () => {
    expect(longestSubstringMap('abcabcbb')).toBe(3);
    expect(longestSubstringMap('bbbbb')).toBe(1);
    expect(longestSubstringMap('pwwkew')).toBe(3);
    expect(longestSubstringMap('c')).toBe(1);
    expect(longestSubstringMap('au')).toBe(2);
    expect(longestSubstringMap('dvdf')).toBe(3);
  });
});
