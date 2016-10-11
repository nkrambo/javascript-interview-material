
import { expect } from 'chai';
import ransomNote from '../ransom_note';

describe('ransomNote()', () => {
  it('should return false if magazine < ransom note, white space excluded', () => {
    expect(ransomNote('muchlonger', 'short')).to.be.false;
  });

  it('should return false if ransom cannot be constructed from magazine', () => {
    expect(ransomNote('a', 'b')).to.be.false;
    expect(ransomNote('aa', 'ab')).to.be.false;
  });

  it('should return true if ransom can be constructed from magazine', () => {
    expect(ransomNote('a', 'a')).to.be.true;
    expect(ransomNote('abc', 'a b c')).to.be.true;
    expect(ransomNote('money or else', 'more money, more problems.')).to.be.true;
  });

  it('should throw a type error', () => {
    expect(function(){ ransomNote (null, null); }).to.throw (TypeError);
    expect(function(){ ransomNote (undefined, undefined); }).to.throw (TypeError);
    expect(function(){ ransomNote (5, 5); }).to.throw (TypeError);
  });
});
