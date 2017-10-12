
import subsetSum from '../subset_sum';

describe('subsetSum()', () => {
  test('should return true if a subset exists that sums to total', () => {
    expect(subsetSum([2, 3, 7, 8, 10], 11)).toBeTruthy();
    expect(subsetSum([2, 3, 7, 8, 10], 5)).toBeTruthy();
  });

  test(
    'should return false if a subset does not exists that sums to total',
    () => {
      expect(subsetSum([2, 3, 7, 8, 10], 14)).toBeFalsy();
      expect(subsetSum([2, 3, 7, 8, 10], 1)).toBeFalsy();
    }
  );
});
