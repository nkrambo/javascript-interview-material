
import { expect } from 'chai';
import mergeSorted from '../merge_sorted_arrays';

describe('mergeSorted()', () => {
  it('should merge two sorted arrays', () => {
    const myArray = [3, 4, 6, 10, 11, 15];
    const alicesArray = [1, 5, 8, 12, 14, 19];
    expect(mergeSorted(myArray, alicesArray)).to.deep.equal([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]);
  });

  it('should return an empty array when passed two empty arrays', () => {
    expect(mergeSorted([], [])).to.deep.equal([]);
  });
});
