

import reverseVowels from '../reverse_vowels_of_string';

describe('reverseVowels()', () => {
  test('should return a string with vowels reversed', () => {
    expect(reverseVowels('hello')).toBe('holle');
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });

  test('should return the same string if there is only a single vowel', () => {
    expect(reverseVowels('be')).toBe('be');
    expect(reverseVowels('a')).toBe('a');
  });
});
