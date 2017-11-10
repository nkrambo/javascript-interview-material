
import { mySqrt, mySqrtBit, mySqrtBS } from '../sqrt';

describe('mySqrt()', () => {
  test('should return the square root', () => {
    expect(mySqrt(1)).toBe(1);
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(64)).toBe(8);
  });
});

describe.skip('mySqrtBit()', () => {
  test('should return the square root', () => {
    expect(mySqrtBit(1)).toBe(1);
    expect(mySqrtBit(4)).toBe(2);
    expect(mySqrtBit(8)).toBe(2);
    expect(mySqrtBit(64)).toBe(8);
  });
});

describe('mySqrtBS()', () => {
  test('should return the square root', () => {
    expect(mySqrtBS(1)).toBe(1);
    expect(mySqrtBS(4)).toBe(2);
    expect(mySqrtBS(8)).toBe(2);
    expect(mySqrtBS(64)).toBe(8);
  });
});
