
import { expect } from 'chai';
import canPermutePalindrome from '../palindrome_permutation';

describe('canPermutePalindrome', () => {
  test('should return true for palindrome permutations', () => {
    expect(canPermutePalindrome('add')).toBeTruthy();
    expect(canPermutePalindrome('a')).toBeTruthy();
    expect(canPermutePalindrome('bbddhhjssaaww')).toBeTruthy();
    expect(canPermutePalindrome('noon')).toBeTruthy();
  });

  test('should return false for invalid palindrome permutations', () => {
    expect(canPermutePalindrome('abcdefg')).toBeFalsy();
    expect(canPermutePalindrome('ad')).toBeFalsy();
  });
});
