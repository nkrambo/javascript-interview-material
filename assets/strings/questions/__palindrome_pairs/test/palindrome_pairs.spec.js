
import { expect } from 'chai';
import palindromePairsHash from '../palindrome_pairs_hash';
import palindromePairsTrie from '../palindrome_pairs_trie';

describe('palindromePairsHash()', () => {
  it('should return an array of valid indices for palidrome pairs', () => {
    expect(palindromePairsHash(['bat', 'tab', 'cat'])).to.deep.equal([[1, 0], [0, 1]]);
    expect(palindromePairsHash(['abcd', 'dcba', 'lls', 's', 'sssll'])).to.deep.equal([[1, 0], [0, 1], [3, 2], [2, 4]]);
    expect(palindromePairsHash(['dad', ''])).to.deep.equal([[0, 1]]);
  });

  it('should throw an error if words array is less than 2', () => {
    expect(function(){ palindromePairsHash(['one']); }).to.throw (Error);
  });

  it('should throw a type error', () => {
    expect(function(){ palindromePairsHash(null); }).to.throw (TypeError);
    expect(function(){ palindromePairsHash(undefined); }).to.throw (TypeError);
    expect(function(){ palindromePairsHash(5); }).to.throw (TypeError);
  });
});

describe('palindromePairsTrie()', () => {
  // it('should return an array of valid indices for palidrome pairs', () => {
  //   expect(palindromePairs()).to.equal();
  // });

  // it('should throw a type error', () => {
  //   expect(function(){ palindromePairs(null); }).to.throw (TypeError);
  //   expect(function(){ palindromePairs(undefined); }).to.throw (TypeError);
  //   expect(function(){ palindromePairs(5); }).to.throw (TypeError);
  // });
});
