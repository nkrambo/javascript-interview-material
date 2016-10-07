
import { expect } from 'chai';
import findInOrderedSet from '../find_in_ordered_set';

describe('findInOrderedSet()', () => {
  it('should return true if target is in nums', () => {
    expect(findInOrderedSet(3, [1, 2, 3])).to.be.true;
  });

  it('should return false if target is not in nums', () => {
    expect(findInOrderedSet(5, [1, 2, 3])).to.be.false;
  });

  it('should throw a type error', () => {
    expect(function(){ findInOrderedSet (null, null); }).to.throw (TypeError);
    expect(function(){ findInOrderedSet (undefined, undefined); }).to.throw (TypeError);
  });

});
