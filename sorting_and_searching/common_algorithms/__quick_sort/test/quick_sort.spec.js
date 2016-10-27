
import { expect } from 'chai';
import quickSort from '../quick_sort';

describe('quickSort()', () => {
  it('should return a sorted array', () => {
    const test = [4, 3, 7, 1, 2, 5, 9];
    expect(quickSort(test)).to.deep.equal([1, 2, 3, 4, 5, 7, 9]);
  });
});
