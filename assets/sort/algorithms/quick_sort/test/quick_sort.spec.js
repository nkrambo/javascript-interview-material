
import { expect } from 'chai';
import quickSort from '../quick_sort';

describe('quickSort()', () => {
  test('should return a sorted array', () => {
    expect(quickSort([3, 5, 2, 6], 0, 3)).to.deep.equal([2, 3, 5, 6]);
    expect(quickSort([2, 1], 0, 1)).to.deep.equal([1, 2]);
  });
});
