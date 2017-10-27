
import { maxSubArrayBrute, maxSubArrayDC, maxSubArrayDP } from '../maximum_subarray';

describe('maxSubArrayBrute()', () => {
  test('should return the largest sum of a contiguous subarray of nums', () => {
    expect(maxSubArrayBrute([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArrayBrute([6, 10, 4])).toBe(20);
    expect(maxSubArrayBrute([-6, -8, -4, -24, -2, -11])).toBe(-2);
  });
});

// describe('maxSubArrayDC()', () => {
//   test('should return the largest sum of a contiguous subarray of nums', () => {
//     expect(maxSubArrayDC([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
//     expect(maxSubArrayDC([6, 10, 4])).toBe(20);
//     expect(maxSubArrayDC([-6, -8, -4, -24, -2, -11])).toBe(-2);
//   });
// });

describe('maxSubArrayDP()', () => {
  test('should return the largest sum of a contiguous subarray of nums', () => {
    expect(maxSubArrayDP([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArrayDP([6, 10, 4])).toBe(20);
    expect(maxSubArrayDP([-6, -8, -4, -24, -2, -11])).toBe(-2);
  });
});
