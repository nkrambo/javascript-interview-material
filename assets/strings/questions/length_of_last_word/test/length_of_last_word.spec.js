
import lengthOfLastWord from '../length_of_last_word';

describe('lengthOfLastWord()', () => {
  test('should return the length of the last word in a string', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
    expect(lengthOfLastWord('a')).toBe(1);
    expect(lengthOfLastWord('')).toBe(0);
    expect(lengthOfLastWord('  ab')).toBe(2);
    expect(lengthOfLastWord('ab   ')).toBe(2);
  });
});
