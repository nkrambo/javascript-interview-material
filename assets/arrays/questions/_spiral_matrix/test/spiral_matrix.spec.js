
import { spiralOrder, spiralOrderLayers } from '../spiral_matrix';

describe('spiralOrder()', () => {
  test('should return the elements of an m x n matrix in spiral order', () => {
    /**
    * [
    *   [ 1, 2, 3 ],
    *   [ 4, 5, 6 ],
    *   [ 7, 8, 9 ],
    * ]
    */

    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});

describe('spiralOrderLayers()', () => {
  test('should return the elements of an m x n matrix in spiral order', () => {
    /**
    * [
    *   [ 1, 2, 3 ],
    *   [ 4, 5, 6 ],
    *   [ 7, 8, 9 ],
    * ]
    */

    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(spiralOrderLayers(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
