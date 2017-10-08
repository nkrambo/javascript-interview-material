
import merge from '../merge_sorted_array';

describe('merge()', () => {
  test('should merge two sorted integer arrays into a single array', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6];

    merge(nums1, 3, nums2, 3);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    expect(nums2).toEqual([4, 5, 6]);

    const nums3 = [11, 21, 23];
    const nums4 = [46, 51];

    merge(nums3, 3, nums4, 2);

    expect(nums3).toEqual([11, 21, 23, 46, 51]);
    expect(nums4).toEqual([46, 51]);
  });
});
