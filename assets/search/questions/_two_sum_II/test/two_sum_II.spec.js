
import twoSum from '../two_sum_II';

describe('twoSum()', () => {
  test('should return the indices of values that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('should return -1 if there are no values that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 50)).toEqual([-1, -1]);
  });
});
