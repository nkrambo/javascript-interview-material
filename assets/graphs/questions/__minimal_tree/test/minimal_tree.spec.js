
import { expect } from 'chai';
import { minimal, minimalRecurse } from '../minimal_tree';

// describe('createMinimalBST()', () => {
//   it('should create a BST with minimal height', () => {
//     const nums = [1, 2, 3, 4, 5, 6, 7];
//     const test = createMinimalBST(nums);
//
//     // root, height 1
//     expect(test.root.value).to.equal(4);
//
//     // height 2
//     expect(test.root.left.value).to.equal(2);
//     expect(test.root.right.value).to.equal(6);
//
//     // height 3
//     expect(test.root.left.left.value).to.equal(1);
//     expect(test.root.left.right.value).to.equal(3);
//     expect(test.root.right.left.value).to.equal(5);
//     expect(test.root.right.right.value).to.equal(7);
//   });
// });

describe('minimalRecurse()', () => {
  it('should create a BST with minimal height', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const test = minimalRecurse(nums);

    // root, height 1
    expect(test.root.value).to.equal(4);

    // height 2
    expect(test.root.left.value).to.equal(2);
    expect(test.root.right.value).to.equal(6);

    // height 3
    expect(test.root.left.left.value).to.equal(1);
    expect(test.root.left.right.value).to.equal(3);
    expect(test.root.right.left.value).to.equal(5);
    expect(test.root.right.right.value).to.equal(7);
  });
});
