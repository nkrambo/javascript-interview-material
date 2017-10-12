
import groupAnagrams from '../group_anagrams';

describe('groupAnagrams()', () => {
  test('should return a sorted array with all anagrams adjacent to each other', () => {
    const words = ['race', 'ghp', 'abc', 'def', 'acre', 'xyz', 'care', 'rcae'];
    groupAnagrams(words);
    // ["race", "acre", "care", "rcae", "ghp", "abc", "def", "xyz"]

    expect(words.length).toBe(8);
    expect(words[1]).toBe('acre');
    expect(words[2]).toBe('care');
  });
});
