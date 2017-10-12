
import isOneEditDistance from '../one_edit_distance';

describe('isOneEditDistance()', () => {
  test('should return true for edits 1 or less', () => {
    expect(isOneEditDistance('pale', 'ple')).toBeTruthy();
    expect(isOneEditDistance('pales', 'pale')).toBeTruthy();
    expect(isOneEditDistance('pale', 'bale')).toBeTruthy();
  });

  test('should return false for edits more than 1', () => {
    expect(isOneEditDistance('pale', 'bae')).toBeFalsy();
  });
});
