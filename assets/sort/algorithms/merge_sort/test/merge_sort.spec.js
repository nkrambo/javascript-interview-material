
import mergeSort from '../merge_sort';

describe('mergeSort()', () => {
  test('should return a sorted array', () => {
    const test = [4, 3, 7, 1, 2, 5, 9];
    expect(mergeSort(test)).toEqual([1, 2, 3, 4, 5, 7, 9]);
  });
});
