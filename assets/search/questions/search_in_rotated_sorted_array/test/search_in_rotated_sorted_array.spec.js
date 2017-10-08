
import { expect } from 'chai';
import search from '../search_in_rotated_sorted_array';

describe('search()', () => {
  test('should find an element in a rotated sorted array', () => {
    const test1 = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
    expect(search(test1, 5)).to.equal(8);
    expect(search(test1, 15)).to.equal(0);

    const test2 = [2, 2, 2, 3, 4, 2];
    expect(search(test2, 4)).to.equal(4);
    expect(search(test2, 3)).to.equal(3);
    expect(search(test2, 2)).to.equal(2);
  });

  test(
    'should return -1 if it cannot find an element in a rotated sorted array',
    () => {
      const test3 = [15, 16, 19, 20, 25];
      expect(search(test3, 2)).to.equal(-1);
    }
  );
});
