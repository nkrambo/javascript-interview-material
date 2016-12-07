
import { expect } from 'chai';
import groupAnagrams from '../group_anagrams';

describe('groupAnagrams()', () => {
  it('should return a sorted array with all anagrams adjacent to each other', () => {
    const words = ['race', 'ghp', 'abc', 'def', 'acre', 'xyz', 'care', 'rcae'];
    groupAnagrams(words);
    // ["race", "acre", "care", "rcae", "ghp", "abc", "def", "xyz"]

    expect(words.length).to.equal(8);
    expect(words[1]).to.equal('acre');
    expect(words[2]).to.equal('care');
  });
});
