
import { expect } from 'chai';
import reverseVowels from '../reverse_vowels';

describe('reverseVowels()', () => {
  it('should return a string with vowels reversed', () => {
    expect(reverseVowels('hello')).to.equal('holle');
    expect(reverseVowels('leetcode')).to.equal('leotcede');
  });

  it('should return the same string if there is only a single vowel', () => {
    expect(reverseVowels('be')).to.equal('be');
    expect(reverseVowels('a')).to.equal('a');
  });

  it('should throw a type error', () => {
    expect(function(){ reverseVowels (null); }).to.throw (TypeError);
    expect(function(){ reverseVowels (undefined); }).to.throw (TypeError);
    expect(function(){ reverseVowels (5); }).to.throw (TypeError);
  });
});
