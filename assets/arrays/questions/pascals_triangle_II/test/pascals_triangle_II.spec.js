
import getRow from '../pascals_triangle_II';

describe('getRow()', () => {
  test('should return the kth row of the Pascal\'s triangle', () => {
    expect(getRow(0)).toEqual([1]);
    expect(getRow(1)).toEqual([1, 1]);
    expect(getRow(2)).toEqual([1, 2, 1]);
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });
});
