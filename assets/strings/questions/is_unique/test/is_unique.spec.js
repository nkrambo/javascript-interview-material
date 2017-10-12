
import { isUnique, isUniqueSort } from '../is_unique';

describe('isUnique()', () => {
  test('should return true for a unique string', () => {
    expect(isUnique('z')).toBeTruthy();
    expect(isUnique('abc')).toBeTruthy();
    expect(isUnique('abcdefg1234567!@#$%^&')).toBeTruthy();
    expect(isUnique('1234567890')).toBeTruthy();
  });

  test('should return false for a non-unique string', () => {
    expect(isUnique('abcc')).toBeFalsy();
    expect(isUnique('11')).toBeFalsy();
  });
});

describe('isUniqueSort()', () => {
  test('should return true for a unique string', () => {
    expect(isUniqueSort('z')).toBeTruthy();
    expect(isUniqueSort('abc')).toBeTruthy();
    expect(isUniqueSort('abcdefg1234567!@#$%^&')).toBeTruthy();
    expect(isUniqueSort('1234567890')).toBeTruthy();
  });

  test('should return false for a non-unique string', () => {
    expect(isUniqueSort('abcc')).toBeFalsy();
    expect(isUniqueSort('11')).toBeFalsy();
  });
});
