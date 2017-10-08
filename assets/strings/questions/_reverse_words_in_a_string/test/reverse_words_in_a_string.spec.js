
import { expect } from 'chai';
import reverseWords from '../reverse_words_in_a_string';

describe('reverseWords()', () => {
  test('should return a reversed string of words', () => {
    expect(reverseWords('backwards is this')).to.equal('this is backwards');
    expect(reverseWords('single')).to.equal('single');
  });
});
