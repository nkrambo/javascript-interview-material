
import { expect } from 'chai';
import isPalidromePermutation from '../palindrome_permutation';

describe('isPalidromePermutation', () => {
  it('should return true for palindrome permutations', () => {
    expect(isPalidromePermutation('add')).to.be.true;
    expect(isPalidromePermutation('a')).to.be.true;
    expect(isPalidromePermutation('bbddhhjssaaww')).to.be.true;
    expect(isPalidromePermutation('noon')).to.be.true;
  });

  it('should return false for invalid palindrome permutations', () => {
    expect(isPalidromePermutation('abcdefg')).to.be.false;
    expect(isPalidromePermutation('ad')).to.be.false;
  });
});
