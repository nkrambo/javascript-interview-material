
import {
  longestPalindromeBrute,
  isPalindrome,
  longestPalindromeDP,
  longestPalindrome,
} from '../longest_palindromic_substring';

describe('longestPalindromeBrute()', () => {
  test('should return the longest palindromic substring', () => {
    expect(longestPalindromeBrute('ababa')).toBe('ababa');
    expect(longestPalindromeBrute('ccc')).toBe('ccc');
    expect(longestPalindromeBrute('hsaaaracecaroo')).toBe('racecar');
    expect(longestPalindromeBrute('cbbd')).toBe('bb');
    expect(longestPalindromeBrute('a')).toBe('a');
    expect(longestPalindromeBrute('dad')).toBe('dad');
    expect(longestPalindromeBrute('abcda')).toBe('a');
  });
});

describe('isPalindrome()', () => {
  test('should return true if string is a valid palindrome', () => {
    expect(isPalindrome('aba', 0, 2)).toBeTruthy();
    expect(isPalindrome('aaa', 0, 0)).toBeTruthy();
    expect(isPalindrome('a', 0, 0)).toBeTruthy();
    expect(isPalindrome('b', 0, 0)).toBeTruthy();
    expect(isPalindrome('racecar', 0, 6)).toBeTruthy();
  });

  test('should return false if string is NOT a valid palindrome', () => {
    expect(isPalindrome('abc', 0, 2)).toBeFalsy();
    expect(isPalindrome('ab', 0, 1)).toBeFalsy();
    expect(isPalindrome('notapalindrome', 0, 13)).toBeFalsy();
  });
});

describe('longestPalindromeDP()', () => {
  test('should return the longest palindromic substring', () => {
    expect(longestPalindromeDP('ababa')).toBe('ababa');
    expect(longestPalindromeDP('ccc')).toBe('ccc');
    expect(longestPalindromeDP('hsaaaracecaroo')).toBe('racecar');
    expect(longestPalindromeDP('cbbd')).toBe('bb');
    expect(longestPalindromeDP('a')).toBe('a');
    expect(longestPalindromeDP('dad')).toBe('dad');
    expect(longestPalindromeDP('abcda')).toBe('a');
  });
});

describe('longestPalindrome()', () => {
  test('should return the longest palindromic substring', () => {
    expect(longestPalindrome('ababa')).toBe('ababa');
    expect(longestPalindrome('ccc')).toBe('ccc');
    expect(longestPalindrome('hsaaaracecaroo')).toBe('racecar');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('dad')).toBe('dad');
    expect(longestPalindrome('abcda')).toBe('a');
  });
});
