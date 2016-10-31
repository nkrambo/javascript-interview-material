
import { expect } from 'chai';
import { palindromePairsHash, palindromePairsTrie } from '../palindrome_pairs';

describe('palindromePairsHash()', () => {
  it('should return an array of valid indices for palidrome pairs', () => {
    expect(palindromePairsHash(['bat', 'tab', 'cat'])).to.deep.equal([[1, 0], [0, 1]]);
  });

  // it('should throw a type error', () => {
  //   expect(function(){ palindromePairs(null); }).to.throw (TypeError);
  //   expect(function(){ palindromePairs(undefined); }).to.throw (TypeError);
  //   expect(function(){ palindromePairs(5); }).to.throw (TypeError);
  // });
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
