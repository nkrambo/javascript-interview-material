
import { expect } from 'chai';
import canMakeRansomNote from '../ransom_note';

describe('canMakeRansomNote()', () => {
  it('should return false if magazine < ransom note, white space excluded', () => {
    expect(canMakeRansomNote('muchlonger', 'short')).to.be.false;
  });

  it('should return false if ransom cannot be constructed from magazine', () => {
    expect(canMakeRansomNote('a', 'b')).to.be.false;
    expect(canMakeRansomNote('aa', 'ab')).to.be.false;
  });

  it('should return true if ransom can be constructed from magazine', () => {
    expect(canMakeRansomNote('a', 'a')).to.be.true;
    expect(canMakeRansomNote('abc', 'a b c')).to.be.true;
    expect(canMakeRansomNote('a b c', 'abc')).to.be.true;
    expect(canMakeRansomNote('a b c', 'a b c')).to.be.true;
    expect(canMakeRansomNote('a b c', 'abcdefg')).to.be.true;
  });
});
