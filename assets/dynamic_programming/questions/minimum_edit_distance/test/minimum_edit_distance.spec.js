

import minEditDistance from '../minimum_edit_distance';

describe('minEditDistance()', () => {
  test('should return the minimum edit distance between s1 and s2', () => {
    expect(minEditDistance('abcdef', 'azced')).toBe(3);
    expect(minEditDistance('a', 'a')).toBe(0);
    expect(minEditDistance('a', 'ab')).toBe(1);
    expect(minEditDistance('ab', 'ab')).toBe(0);
    expect(minEditDistance('ab', 'ac')).toBe(1);
  });
});
