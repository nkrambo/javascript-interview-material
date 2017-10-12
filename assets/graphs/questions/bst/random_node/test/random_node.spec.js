

import BSTRandom from '../random_node';

// overwrite the getRandomNode() to explicitly pass in index for testing
class BSTRandomTest extends BSTRandom {
  getRandomNode(idx) {
    let index = idx;

    // traverse from root
    let current = this.root;
    while (current) {
      // if we're at index
      if (index === this.getChildren(current.left)) return current.value;

      // if index < current, go left
      if (index < this.getChildren(current.left)) {
        current = current.left;

      // if index > current, go right and subtract left tree and parent node from index
      } else if (index > this.getChildren(current.left)) {
        index = (index - this.getChildren(current.left)) - 1;
        current = current.right;
      }
    }

    return null;
  }
}

/**
*                  4
*               ↙     ↘
*             2         6
*           ↙  ↘      ↙   ↘
*         1     3    5     7
*/

const bst = new BSTRandomTest();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

describe('getRandomNode()', () => {
  test('should return a random node from a BST class', () => {
    expect(bst.getRandomNode(0)).toBe(1);
    expect(bst.getRandomNode(1)).toBe(2);
    expect(bst.getRandomNode(2)).toBe(3);
    expect(bst.getRandomNode(3)).toBe(4);
    expect(bst.getRandomNode(4)).toBe(5);
    expect(bst.getRandomNode(5)).toBe(6);
    expect(bst.getRandomNode(6)).toBe(7);
  });
});
