
import { minPathSumBrute, minPathSum } from '../minimum_path_sum';

describe('minPathSumBrute()', () => {
  test('should minimizes the sum of all numbers along its path from top-left to bottom-right', () => {
    const grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
    expect(minPathSumBrute(grid)).toBe(7);
  });
});
