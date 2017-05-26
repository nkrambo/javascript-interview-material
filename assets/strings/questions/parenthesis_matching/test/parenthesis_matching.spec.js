
import { expect } from 'chai';
import parenthesisMatching from '../parenthesis_matching';

describe('parenthesisMatching()', () => {
  it('should return the index of the closing parenthesis for character at pos.', () => {
    expect(parenthesisMatching('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10)).to.equal(79);
    expect(parenthesisMatching('(Sometimes)', 0)).to.equal(10);
    expect(parenthesisMatching('()', 0)).to.equal(1);
    expect(parenthesisMatching('test ((this) please)', 6)).to.equal(11);
  });

  it('should throw an error if pos does not match parenthesis index.', () => {
    expect(() => { parenthesisMatching('(sentence)', 5); }).to.throw(Error);
  });

  it('should throw an error if there is no closing parenthesis.', () => {
    expect(() => { parenthesisMatching('(this will throw error', 0); }).to.throw(Error);
  });
});
