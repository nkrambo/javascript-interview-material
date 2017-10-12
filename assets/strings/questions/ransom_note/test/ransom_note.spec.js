
import { expect } from 'chai';
import canConstruct from '../ransom_note';

describe('canConstruct()', () => {
  test(
    'should return false if magazine < ransom note, white space excluded',
    () => {
      expect(canConstruct('muchlonger', 'short')).toBeFalsy();
    }
  );

  test(
    'should return false if ransom cannot be constructed from magazine',
    () => {
      expect(canConstruct('a', 'b')).toBeFalsy();
      expect(canConstruct('aa', 'ab')).toBeFalsy();
    }
  );

  test('should return true if ransom can be constructed from magazine', () => {
    expect(canConstruct('a', 'a')).toBeTruthy();
    expect(canConstruct('abc', 'a b c')).toBeTruthy();
    expect(canConstruct('a b c', 'abc')).toBeTruthy();
    expect(canConstruct('a b c', 'a b c')).toBeTruthy();
    expect(canConstruct('a b c', 'abcdefg')).toBeTruthy();
  });
});
