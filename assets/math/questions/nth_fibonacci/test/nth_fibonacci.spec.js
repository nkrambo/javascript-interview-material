
import { fib, fibRecursive } from '../nth_fibonacci';

describe('fib()', () => {
  test('should return the nth fibonacci number', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
  });

  test('should throw an error if n is negative', () => {
    expect(() => { fib(-1); }).toThrow(Error);
  });
});

describe('fibRecursive()', () => {
  test('should return the nth fibonacci number', () => {
    expect(fibRecursive(0)).toBe(0);
    expect(fibRecursive(1)).toBe(1);
    expect(fibRecursive(2)).toBe(1);
    expect(fibRecursive(3)).toBe(2);
    expect(fibRecursive(4)).toBe(3);
    expect(fibRecursive(5)).toBe(5);
    expect(fibRecursive(6)).toBe(8);
  });
});
