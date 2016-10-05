
import { expect } from 'chai';
import reverseString from '../reverse_string_in_place';

describe('reverseString()', () => {
  it('should return a reversed a string', () => {
    expect(reverseString('abcd')).to.equal('dcba');
  });

  it('should return the same string if string length <= 1', () => {
    expect(reverseString('p')).to.equal('p');
  });

  it('should throw a type error', () => {
    expect(function(){ reverseString (null); }).to.throw (TypeError);
    expect(function(){ reverseString (undefined); }).to.throw (TypeError);
    expect(function(){ reverseString (5); }).to.throw (TypeError);
  });
});
