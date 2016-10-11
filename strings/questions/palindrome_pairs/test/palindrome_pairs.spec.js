
import { expect } from 'chai';
import palindromePairs from '../palindrome_pairs';

describe('palindromePairs()', () => {
  // it('should return an array of valid indices for palidrome pairs', () => {
  //   expect(palindromePairs()).to.equal();
  // });

  it('should throw a type error', () => {
    expect(function(){ palindromePairs(null); }).to.throw (TypeError);
    expect(function(){ palindromePairs(undefined); }).to.throw (TypeError);
    expect(function(){ palindromePairs(5); }).to.throw (TypeError);
  });
});
