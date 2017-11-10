
import { maxProfitBrute, maxProfit } from '../best_time_to_buy_and_sell_stock';

describe('maxProfitBrute()', () => {
  test('should return the maximum profit from price data', () => {
    expect(maxProfitBrute([10, 7, 5, 8, 11, 9])).toBe(6);
    expect(maxProfitBrute([10, 20])).toBe(10);
    expect(maxProfitBrute([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfitBrute([7, 1, 5, 3, 6, 4])).toBe(5);
  });
});

describe('maxProfit()', () => {
  test('should return the maximum profit from price data', () => {
    expect(maxProfit([10, 7, 5, 8, 11, 9])).toBe(6);
    expect(maxProfit([10, 20])).toBe(10);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
});
