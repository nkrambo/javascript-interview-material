import { expect } from 'chai';
import insertionSort from '../insertion_sort';

describe('insertionSort()', () => {
  it('should return a new sorted array', () => {
    expect(insertionSort([4, 3, 7, 1, 2, 5, 9])).to.deep.equal([1, 2, 3, 4, 5, 7, 9]);
    expect(insertionSort([3, 5, 3, 3, 5])).to.deep.equal([3, 3, 3, 5, 5]);
  });
});