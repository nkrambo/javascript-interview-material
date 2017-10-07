
import { expect } from 'chai';
import merge from '../merge_sorted_array';

describe('merge()', () => {
  it('should merge two sorted integer arrays into a single array', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6];

    merge(nums1, 3, nums2, 3);

    expect(nums1).to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(nums2).to.deep.equal([4, 5, 6]);

    const nums3 = [11, 21, 23];
    const nums4 = [46, 51];

    merge(nums3, 3, nums4, 2);

    expect(nums3).to.deep.equal([11, 21, 23, 46, 51]);
    expect(nums4).to.deep.equal([46, 51]);
  });
});
