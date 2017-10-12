
import isIsomorphic from '../isomorphic_strings';

describe('isIsomorphic()', () => {
  test('should return true if str1 and str2 are isomorphic', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy();
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
  });

  test('should return false if str1 and str2 are not isomorphic', () => {
    expect(isIsomorphic('foo', 'bar')).toBeFalsy();
  });

  test('should return false if str1 and str2 are different lengths', () => {
    expect(isIsomorphic('foo', 'barrr')).toBeFalsy();
  });
});
