
import { threeSum } from '../3sum';

describe('threeSum()', () => {
  test('should find all unique triplets which sum to zero', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    expect(threeSum([1, 2])).toEqual([]);
  });
});
