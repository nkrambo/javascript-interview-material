
import { expect } from 'chai';
import countingSort from '../counting_sort';

describe('countingSort()', () => {
  it('should return a new sorted array', () => {
    const test = [4, 3, 7, 1, 2, 5, 9];
    expect(mergeSort(test)).to.deep.equal([1, 2, 3, 4, 5, 7, 9]);
  });
});
