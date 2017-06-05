
import { expect } from 'chai';
import canConstruct from '../ransom_note';

describe('canConstruct()', () => {
  it('should return false if magazine < ransom note, white space excluded', () => {
    expect(canConstruct('muchlonger', 'short')).to.be.false;
  });

  it('should return false if ransom cannot be constructed from magazine', () => {
    expect(canConstruct('a', 'b')).to.be.false;
    expect(canConstruct('aa', 'ab')).to.be.false;
  });

  it('should return true if ransom can be constructed from magazine', () => {
    expect(canConstruct('a', 'a')).to.be.true;
    expect(canConstruct('abc', 'a b c')).to.be.true;
    expect(canConstruct('a b c', 'abc')).to.be.true;
    expect(canConstruct('a b c', 'a b c')).to.be.true;
    expect(canConstruct('a b c', 'abcdefg')).to.be.true;
  });
});
