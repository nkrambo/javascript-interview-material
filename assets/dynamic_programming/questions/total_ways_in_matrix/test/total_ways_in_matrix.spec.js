
import totalWays from '../total_ways_in_matrix';

describe('totalWays()', () => {
  test(
    'should return the number of ways reach bottom right from top left',
    () => {
      const matrix = [[0, 0, 0, 0],
                      [0, 0, 0, 0],
                      [0, 0, 0, 0],
                      [0, 0, 0, 0]];

      expect(totalWays(matrix)).toBe(20);

      const matrixTwo = [[0, 0],
                         [0, 0]];

      expect(totalWays(matrixTwo)).toBe(2);
    }
  );
});
