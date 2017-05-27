
import { expect } from 'chai';
import alienOrder from '../alien_dictionary';

describe('alienOrder()', () => {
  it('should return the correct order of letters given a dictionary of words', () => {
    const words = ['wrt', 'wrf', 'er', 'ett', 'rftt'];
    expect(alienOrder(words)).to.equal('wertf');
  });
});
