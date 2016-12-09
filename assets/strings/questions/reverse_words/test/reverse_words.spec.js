
import { expect } from 'chai';
import reverseWords from '../reverse_words';

describe('reverseWords()', () => {
  it('should return a reversed string of words', () => {
    expect(reverseWords('backwards is this')).to.equal('this is backwards');
    expect(reverseWords('single')).to.equal('single');
  });
});
