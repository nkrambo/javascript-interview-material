
import searchInsert from '../search_insert_position';

describe('searchInsert()', () => {
  test('should return the index at where to insert the target', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test('should return -1 if there is the target already exists ', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
});
