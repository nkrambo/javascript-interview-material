
import { expect } from 'chai';
import isOneEditDistance from '../one_edit_distance';

describe('isOneEditDistance()', () => {
  it('should return true for edits 1 or less', () => {
    expect(isOneEditDistance('pale', 'ple')).to.be.true;
    expect(isOneEditDistance('pales', 'pale')).to.be.true;
    expect(isOneEditDistance('pale', 'bale')).to.be.true;
  });

  it('should return false for edits more than 1', () => {
    expect(isOneEditDistance('pale', 'bae')).to.be.false;
  });
});
