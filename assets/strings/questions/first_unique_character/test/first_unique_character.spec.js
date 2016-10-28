
import { expect } from 'chai';
import firstUniqueChar from '../first_unique_character';

describe('firstUniqueChar()', () => {
  it('should return the index of the first unique character', () => {
    expect(firstUniqueChar('leetcode')).to.equal(0);
    expect(firstUniqueChar('loveleetcode')).to.equal(2);
  });

  it('should return -1 if there are no unique characters', () => {
    expect(firstUniqueChar('aabb')).to.equal(-1);
    expect(firstUniqueChar('cdcd')).to.equal(-1);
  });

  it('should throw a type error', () => {
    expect(function(){ firstUniqueChar (null); }).to.throw (TypeError);
    expect(function(){ firstUniqueChar (undefined); }).to.throw (TypeError);
    expect(function(){ firstUniqueChar ([]); }).to.throw (TypeError);
  });
});
