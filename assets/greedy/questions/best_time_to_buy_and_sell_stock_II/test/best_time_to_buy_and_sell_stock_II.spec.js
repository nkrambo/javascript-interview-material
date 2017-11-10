
import maxProfit from '../best_time_to_buy_and_sell_stock_II';

describe('maxProfit()', () => {
  test('should return the maximum profit from price data', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
    expect(maxProfit([7, 3])).toBe(0);
    expect(maxProfit([9])).toBe(0);
    expect(maxProfit([3, 5, 1, 3])).toBe(4);
  });
});
