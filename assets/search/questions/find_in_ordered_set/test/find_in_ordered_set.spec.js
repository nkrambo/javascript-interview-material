

import findInOrderedSet from '../find_in_ordered_set';

describe('findInOrderedSet()', () => {
  test('should return true if target is in nums', () => {
    expect(findInOrderedSet(3, [1, 2, 3])).to.be.true;
  });

  test('should return false if target is not in nums', () => {
    expect(findInOrderedSet(5, [1, 2, 3])).to.be.false;
  });
});
