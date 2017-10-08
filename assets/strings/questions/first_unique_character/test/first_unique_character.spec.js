
import { expect } from 'chai';
import firstUniqChar from '../first_unique_character';

describe('firstUniqChar()', () => {
  test('should return the index of the first unique character', () => {
    expect(firstUniqChar('leetcode')).to.equal(0);
    expect(firstUniqChar('loveleetcode')).to.equal(2);
  });

  test('should return -1 if there are no unique characters', () => {
    expect(firstUniqChar('aabb')).to.equal(-1);
    expect(firstUniqChar('cdcd')).to.equal(-1);
  });
});
