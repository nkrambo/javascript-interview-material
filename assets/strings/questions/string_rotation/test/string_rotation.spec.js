

import isRotation from '../string_rotation';

describe('isRotation()', () => {
  test('should return true for valid rotation', () => {
    expect(isRotation('waterbottle', 'erbottlewat')).toBeTruthy();
  });

  test('should return false for invalid rotation', () => {
    expect(isRotation('water', 'teraw')).toBeFalsy();
  });

  test('should return false for strings of different length', () => {
    expect(isRotation('water', 'waters')).toBeFalsy();
  });

  test('should return false for s1 length <= 1', () => {
    expect(isRotation('b', 'abcd')).toBeFalsy();
  });
});
