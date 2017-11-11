
import climbStairs from '../climbing_stairs';

describe('climbStairs()', () => {
  test('should calculate how many distinct ways you can reach the top of n stairs taking 1 and 2 step leaps', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
  });
});
