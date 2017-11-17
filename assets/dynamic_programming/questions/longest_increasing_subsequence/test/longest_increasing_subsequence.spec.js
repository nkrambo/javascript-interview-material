
import { lengthOfLISBrute, lengthOfLIS } from '../longest_increasing_subsequence';

describe('lengthOfLISBrute()', () => {
  test('should return the longest increasing subsequence', () => {
    // [-1, 0, 2, 3]
    expect(lengthOfLIS([3, 4, -1, 0, 6, 2, 3])).toBe(4);

    // [2, 5, 8]
    expect(lengthOfLIS([2, 5, 1, 8, 3])).toBe(3);
  });
});

describe('lengthOfLIS()', () => {
  test('should return the longest increasing subsequence', () => {
    // [-1, 0, 2, 3]
    expect(lengthOfLIS([3, 4, -1, 0, 6, 2, 3])).toBe(4);

    // [2, 5, 8]
    expect(lengthOfLIS([2, 5, 1, 8, 3])).toBe(3);
  });
});
