
import { expect } from 'chai';
import { isPermutation, isPermutationSort } from '../check_permutation';

describe('isPermutation()', () => {
  it('should return true for a permutation', () => {
    expect(isPermutation('dog', 'god')).to.be.true;
    expect(isPermutation('abcd', 'bdca')).to.be.true;
    expect(isPermutation('cat', 'cat')).to.be.true;
  });

  it('should return false for strings of different length', () => {
    expect(isPermutation('abcd', 'abc')).to.be.false;
  });

  it('should return false for non permutations of same length', () => {
    expect(isPermutation('abcd', 'zqwe')).to.be.false;
    expect(isPermutation('a', 'b')).to.be.false;
  });
});

describe('isPermutationSort()', () => {
  it('should return true for a permutation', () => {
    expect(isPermutationSort('dog', 'god')).to.be.true;
    expect(isPermutationSort('abcd', 'bdca')).to.be.true;
    expect(isPermutationSort('cat', 'cat')).to.be.true;
  });

  it('should return false for strings of different length', () => {
    expect(isPermutationSort('abcd', 'abc')).to.be.false;
  });

  it('should return false for non permutations of same length', () => {
    expect(isPermutationSort('abcd', 'zqwe')).to.be.false;
    expect(isPermutationSort('a', 'b')).to.be.false;
  });
});
