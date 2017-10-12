
import firstUniqChar from '../first_unique_character';

describe('firstUniqChar()', () => {
  test('should return the index of the first unique character', () => {
    expect(firstUniqChar('leetcode')).toBe(0);
    expect(firstUniqChar('loveleetcode')).toBe(2);
  });

  test('should return -1 if there are no unique characters', () => {
    expect(firstUniqChar('aabb')).toBe(-1);
    expect(firstUniqChar('cdcd')).toBe(-1);
  });
});
