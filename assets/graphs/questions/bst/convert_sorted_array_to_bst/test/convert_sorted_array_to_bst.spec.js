
import { sortedArrayToBST, sortedArrayToBSTIter } from '../convert_sorted_array_to_bst';

describe('sortedArrayToBST()', () => {
  test('should convert a sorted array to a height balanced BST', () => {
    const balanced = sortedArrayToBST([1, 2, 3, 4, 5]);
    // root
    expect(balanced.val).toBe(3);

    // level 1
    expect(balanced.left.val).toBe(1);
    expect(balanced.right.val).toBe(4);

    // level 2
    expect(balanced.left.right.val).toBe(2);
    expect(balanced.right.right.val).toBe(5);

    // single node
    const single = sortedArrayToBST([1]);
    expect(single.val).toBe(1);
  });
});

describe('sortedArrayToBSTIter()', () => {
  test('should convert a sorted array to a height balanced BST', () => {
    const balanced = sortedArrayToBSTIter([1, 2, 3, 4, 5]);
    // root
    expect(balanced.val).toBe(3);

    // level 1
    expect(balanced.left.val).toBe(1);
    expect(balanced.right.val).toBe(4);

    // level 2
    expect(balanced.left.right.val).toBe(2);
    expect(balanced.right.right.val).toBe(5);

    // single node
    const single = sortedArrayToBST([1]);
    expect(single.val).toBe(1);
  });
});
