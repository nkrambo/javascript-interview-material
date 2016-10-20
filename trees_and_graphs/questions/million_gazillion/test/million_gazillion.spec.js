
import { expect } from 'chai';
import MillionGazillion from '../million_gazillion';

describe('MillionGazillion', () => {
  const dict = new MillionGazillion();
  dict.checkOrAdd('test');

  it('should add in new word', () => {
    expect(dict.root.hasOwnProperty('t')).to.be.true;
  });

  it('should return false if a word exists', () => {
    expect(dict.checkOrAdd('test')).to.be.false;
  });
});
