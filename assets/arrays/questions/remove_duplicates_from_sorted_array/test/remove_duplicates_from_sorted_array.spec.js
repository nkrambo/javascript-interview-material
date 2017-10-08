
import removeDuplicates from '../remove_duplicates_from_sorted_array';

describe('removeDuplicates()', () => {
  test(
    'should return the updated length of a an array where duplicate values have been removed', () => {
      expect(removeDuplicates([1, 1, 2])).toBe(2);
      expect(removeDuplicates([1, 1])).toBe(1);
      expect(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5])).toBe(5);
    }
  );
});
