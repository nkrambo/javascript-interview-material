
import { expect } from 'chai';
import minEditDistance from '../minimum_edit_distance';

describe('minEditDistance()', () => {
  test('should return the minimum edit distance between s1 and s2', () => {
    expect(minEditDistance('abcdef', 'azced')).to.equal(3);
    expect(minEditDistance('a', 'a')).to.equal(0);
    expect(minEditDistance('a', 'ab')).to.equal(1);
    expect(minEditDistance('ab', 'ab')).to.equal(0);
    expect(minEditDistance('ab', 'ac')).to.equal(1);
  });
});
