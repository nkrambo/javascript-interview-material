
import { expect } from 'chai';
import reverseString from '../reverse_string';

describe('reverseString()', () => {
  test('should return a reversed a string', () => {
    expect(reverseString('abcd')).toBe('dcba');
  });

  test('should return the same string if string length <= 1', () => {
    expect(reverseString('p')).toBe('p');
  });
});
