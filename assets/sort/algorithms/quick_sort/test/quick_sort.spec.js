
import quickSort from '../quick_sort';

describe('quickSort()', () => {
  test('should return a sorted array', () => {
    expect(quickSort([3, 5, 2, 6], 0, 3)).toEqual([2, 3, 5, 6]);
    expect(quickSort([2, 1], 0, 1)).toEqual([1, 2]);
  });
});
