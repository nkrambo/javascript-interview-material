
import { expect } from 'chai';
import { isPalindrome1, isPalindrome2 } from '../palindrome_number';

describe('isPalindrome1()', () => {
  it('should return true if a number is a palindrome', () => {
    expect(isPalindrome1(101)).to.equal(true);
    expect(isPalindrome1(1)).to.equal(true);
    expect(isPalindrome1(11)).to.equal(true);
  });

  it('should return false if a number is NOT a palindrome', () => {
    expect(isPalindrome1(100)).to.equal(false);
    expect(isPalindrome1(1001110)).to.equal(false);
  });
});

describe('isPalindrome2()', () => {
  it('should return true if a number is a palindrome', () => {
    expect(isPalindrome2(101)).to.equal(true);
    expect(isPalindrome2(1)).to.equal(true);
    expect(isPalindrome2(11)).to.equal(true);
  });

  it('should return false if a number is NOT a palindrome', () => {
    expect(isPalindrome2(100)).to.equal(false);
    expect(isPalindrome2(1001110)).to.equal(false);
  });
});
