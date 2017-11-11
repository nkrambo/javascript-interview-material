
import plusOne from '../plus_one';

describe('plusOne()', () => {
  test('should plus 1 to a non-negative integer represented as a non-empty array of digits', () => {
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([1])).toEqual([2]);
    expect(plusOne([1, 1])).toEqual([1, 2]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });
});
