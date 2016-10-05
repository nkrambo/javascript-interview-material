
import { expect } from 'chai';
import reverseWords from '../reverse_words';

describe('reverseWords()', () => {
  it('should return a reversed string of words', () => {
    expect(reverseWords('backwards is this')).to.equal('this is backwards');
    expect(reverseWords('single')).to.equal('single');
  });

  it('should throw a type error', () => {
    expect(function(){ reverseWords (null); }).to.throw (TypeError);
    expect(function(){ reverseWords (undefined); }).to.throw (TypeError);
    expect(function(){ reverseWords (5); }).to.throw (TypeError);
  });

});
