
import { expect } from 'chai';
import canPermutePalindrome from '../palindrome_permutation';

describe('canPermutePalindrome', () => {
  test('should return true for palindrome permutations', () => {
    expect(canPermutePalindrome('add')).to.be.true;
    expect(canPermutePalindrome('a')).to.be.true;
    expect(canPermutePalindrome('bbddhhjssaaww')).to.be.true;
    expect(canPermutePalindrome('noon')).to.be.true;
  });

  test('should return false for invalid palindrome permutations', () => {
    expect(canPermutePalindrome('abcdefg')).to.be.false;
    expect(canPermutePalindrome('ad')).to.be.false;
  });
});
