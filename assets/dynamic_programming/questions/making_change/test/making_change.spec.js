
import { expect } from 'chai';
import makeChange from '../making_change';

describe('makeChange()', () => {
  it('should return all possible methods to make change', () => {
    expect(makeChange(4, [1, 2, 3])).to.equal(4);
  });
});
