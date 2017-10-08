
import { twoSumBrute, twoSumMap } from '../two_sum';

describe('twoSumBrute()', () => {
  test('should return the indices that add up to target', () => {
    expect(twoSumBrute([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumBrute([1, 2], 3)).toEqual([0, 1]);
    expect(twoSumBrute([1, 2, 5, 6], 11)).toEqual([2, 3]);
  });

  test('should return an empty array if no values add up to ', () => {
    expect(twoSumBrute([1, 2, 3, 4], 15)).toEqual([]);
  });
});

describe('twoSumMap()', () => {
  test('should return the indices that add up to target', () => {
    expect(twoSumMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSumMap([1, 2], 3)).toEqual([0, 1]);
    expect(twoSumMap([1, 2, 5, 6], 11)).toEqual([2, 3]);
  });

  test('should return an empty array if no values add up to ', () => {
    expect(twoSumMap([1, 2, 3, 4], 15)).toEqual([]);
  });
});
