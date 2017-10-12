
import isPowerOfThree from '../power_of_three';

describe('isPowerOfThree()', () => {
  test('should return true if n is a power of three', () => {
    expect(isPowerOfThree(9)).toBeTruthy();
    expect(isPowerOfThree(27)).toBeTruthy();
    expect(isPowerOfThree(81)).toBeTruthy();
    expect(isPowerOfThree(6561)).toBeTruthy();
  });

  test('should return false if n is not a power of three', () => {
    expect(isPowerOfThree(5)).toBeFalsy();
    expect(isPowerOfThree(-1)).toBeFalsy();
    expect(isPowerOfThree(22883)).toBeFalsy();
  });
});
