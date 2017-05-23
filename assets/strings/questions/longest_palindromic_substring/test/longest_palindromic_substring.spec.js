
import { expect } from 'chai';
import {
  longestPalindromeBrute,
  isPalindrome,
  longestPalindromeDP,
  longestPalindrome,
} from '../longest_palindromic_substring';

describe('longestPalindromeBrute()', () => {
  it('should return the longest palindromic substring', () => {
    expect(longestPalindromeBrute('babad')).to.be.oneOf(['bab', 'aba']);
    expect(longestPalindromeBrute('ababa')).to.equal('ababa');
    expect(longestPalindromeBrute('ccc')).to.equal('ccc');
    expect(longestPalindromeBrute('hsaaaracecaroo')).to.equal('racecar');
    expect(longestPalindromeBrute('cbbd')).to.equal('bb');
    expect(longestPalindromeBrute('a')).to.equal('a');
    expect(longestPalindromeBrute('dad')).to.equal('dad');
    expect(longestPalindromeBrute('abcda')).to.equal('a');
  });
});

describe('isPalindrome()', () => {
  it('should return true if string is a valid palindrome', () => {
    expect(isPalindrome('aba', 0, 2)).to.be.true;
    expect(isPalindrome('aaa', 0, 0)).to.be.true;
    expect(isPalindrome('a', 0, 0)).to.be.true;
    expect(isPalindrome('b', 0, 0)).to.be.true;
    expect(isPalindrome('racecar', 0, 6)).to.be.true;
  });

  it('should return false if string is NOT a valid palindrome', () => {
    expect(isPalindrome('abc', 0, 2)).to.be.false;
    expect(isPalindrome('ab', 0, 1)).to.be.false;
    expect(isPalindrome('notapalindrome', 0, 13)).to.be.false;
  });
});

// describe('longestPalindromeDP()', () => {
//   it('should return the longest palindromic substring', () => {
//     expect(longestPalindromeDP('babad')).to.be.oneOf(['bab', 'aba']);
//     expect(longestPalindromeDP('ababa')).to.equal('ababa');
//     expect(longestPalindromeDP('ccc')).to.equal('ccc');
//     expect(longestPalindromeDP('hsaaaracecaroo')).to.equal('racecar');
//     expect(longestPalindromeDP('cbbd')).to.equal('bb');
//     expect(longestPalindromeDP('a')).to.equal('a');
//     expect(longestPalindromeDP('dad')).to.equal('dad');
//     expect(longestPalindromeDP('abcda')).to.equal('a');
//   });
// });
//
// describe('longestPalindrome()', () => {
//   it('should return the longest palindromic substring', () => {
//     expect(longestPalindrome('babad')).to.be.oneOf(['bab', 'aba']);
//     expect(longestPalindrome('ababa')).to.equal('ababa');
//     expect(longestPalindrome('ccc')).to.equal('ccc');
//     expect(longestPalindrome('hsaaaracecaroo')).to.equal('racecar');
//     expect(longestPalindrome('cbbd')).to.equal('bb');
//     expect(longestPalindrome('a')).to.equal('a');
//     expect(longestPalindrome('dad')).to.equal('dad');
//     expect(longestPalindrome('abcda')).to.equal('a');
//   });
// });
