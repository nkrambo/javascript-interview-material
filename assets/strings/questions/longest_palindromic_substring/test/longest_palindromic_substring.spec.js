
import { expect } from 'chai';
import { longestPalindromeBrute, isPalindrome } from '../longest_palindromic_substring';

// describe('longestPalindromeBrute()', () => {
//   it('should return the longest palindromic substring', () => {
//     expect(longestPalindromeBrute('babad')).to.equal('bab');
//     expect(longestPalindromeBrute('cbbd')).to.equal('bb');
//     expect(longestPalindromeBrute('a')).to.equal('a');
//     expect(longestPalindromeBrute('dad')).to.equal('dad');
//   });
//
//   it('should return an empty string if it is passed an empty string', () => {
//     expect(longestPalindromeBrute('')).to.equal('');
//   });
// });

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
