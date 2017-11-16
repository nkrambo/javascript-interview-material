
import coinChange from '../coin_change';

describe('coinChange()', () => {
  test('should return the minimum amount of coins required to make change', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
    expect(coinChange([1, 2, 5], 5)).toBe(1);
  });

  test('should return -1 if the coins cannot make change', () => {
    expect(coinChange([2], 3)).toBe(-1);
    expect(coinChange([3, 5], 4)).toBe(-1);
  });
});
