
import splitArray from '../split_array_largest_sum';

describe.skip('splitArray()', () => {
  test('should split an array into m non-empty continuous sub arrays', () => {
    expect(splitArray([7, 2, 5, 10, 8], 2)).toBe(18);
  });
});
