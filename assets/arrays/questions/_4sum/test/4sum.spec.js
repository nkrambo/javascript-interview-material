
import fourSum from '../4sum';

describe.skip('fourSum()', () => {
  test('should return quadruplet values that sum to target', () => {
    const expected = [[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]];
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual(expected);
  });
});
