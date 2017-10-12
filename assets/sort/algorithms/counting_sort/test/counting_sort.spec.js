
import countingSort from '../counting_sort';

describe('countingSort()', () => {
  test('should return a new sorted array', () => {
    expect(countingSort([4, 3, 7, 1, 2, 5, 9], 9)).toEqual([1, 2, 3, 4, 5, 7, 9]);
    expect(countingSort([3, 5, 3, 3, 5], 5)).toEqual([3, 3, 3, 5, 5]);
  });
});
