
import { expect } from 'chai';
import manachers from '../manachers';

describe('manachers()', () => {
  it('should return the longest palindromic substring', () => {
    expect(manachers('babad')).to.be.oneOf(['bab', 'aba']);
    expect(manachers('ababa')).to.equal('ababa');
    expect(manachers('ccc')).to.equal('ccc');
    expect(manachers('hsaaaracecaroo')).to.equal('racecar');
    expect(manachers('cbbd')).to.equal('bb');
    expect(manachers('a')).to.equal('a');
    expect(manachers('dad')).to.equal('dad');
    expect(manachers('abcda')).to.equal('a');
  });
});
