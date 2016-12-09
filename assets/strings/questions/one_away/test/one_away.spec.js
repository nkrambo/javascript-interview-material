
import { expect } from 'chai';
import oneAway from '../one_away';

describe('oneAway()', () => {
  it('should return true for edits 1 or less', () => {
    expect(oneAway('pale', 'ple')).to.be.true;
    expect(oneAway('pales', 'pale')).to.be.true;
    expect(oneAway('pale', 'bale')).to.be.true;
  });

  it('should return false for edits more than 1', () => {
    expect(oneAway('pale', 'bae')).to.be.false;
  });
});
