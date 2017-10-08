
import { expect } from 'chai';
import removeDuplicates from '../remove_duplicates_from_sorted_array';

describe('removeDuplicates()', () => {
  test(
    'should return the updated length of a an array where duplicate values have been removed',
    () => {
      expect(removeDuplicates([1, 1, 2])).to.equal(2);
      expect(removeDuplicates([1, 1])).to.equal(1);
      expect(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 5, 5])).to.equal(5);
    }
  );
});
