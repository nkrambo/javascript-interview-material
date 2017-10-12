
import selectionSort from '../selection_sort';

describe('selectionSort()', () => {
  test('should sort an array in place', () => {
    const test1 = [3, 5, 2, 6];
    selectionSort(test1);
    expect(test1).toEqual([2, 3, 5, 6]);

    const test2 = [2, 1];
    selectionSort(test2);
    expect(test2).toEqual([1, 2]);
  });
});
