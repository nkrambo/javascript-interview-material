
import BinarySearchTree from '../bst';

describe('BinarySearchTree', () => {
  test('should insert a value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);

    expect(BST.root.value).toBe(5);
    expect(BST.root.right.value).toBe(7);
    expect(BST.root.left.value).toBe(2);
  });

  test('should find a value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);

    expect(BST.find(5).value).toBe(5);
  });

  test('should check if the tree is empty', () => {
    const BST = new BinarySearchTree();
    expect(BST.isEmpty()).toBeTruthy();

    BST.insert(10);
    expect(BST.isEmpty()).toBeFalsy();
  });

  test('should return the largest value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    expect(BST.largest().value).toBe(7);
  });

  test('should return the smallest value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    expect(BST.smallest().value).toBe(2);
  });

  test('should return the next value', () => {
    /**
    *                  5
    *               ↙     ↘
    *             2         7
    *           ↙  ↘      ↙   ↘
    *         1     4    6     8
    */

    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);
    BST.insert(8);
    BST.insert(1);

    expect(BST.next(2).value).toBe(4);
    expect(BST.next(5).value).toBe(6);
    expect(BST.next(1).value).toBe(2);
    expect(BST.next(4).value).toBe(5);
    expect(BST.next(7).value).toBe(8);
    expect(BST.next(6).value).toBe(7);
  });

  test('should delete a value', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    expect(BST.delete(7)).toBe('Node removed');
  });

  test('should return a range of values', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);
    BST.insert(8);
    BST.insert(1);

    expect(BST.range(2, 7)).toEqual([2, 4, 5, 6, 7]);
    expect(BST.range(1, 4)).toEqual([1, 2, 4]);
    expect(BST.range(5, 7)).toEqual([5, 6, 7]);
    expect(BST.range(5, 6)).toEqual([5, 6]);
    expect(BST.range(1, 1)).toEqual([1]);
    expect(BST.range(1, 8)).toEqual([1, 2, 4, 5, 6, 7, 8]);
  });

  test('should perform a dfs', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    BST.dfs(BST.root, (node) => {
      node.value *= 2;
    });

    expect(BST.root.value).toBe(10);
    expect(BST.root.left.value).toBe(4);
  });

  test('should perform a bfs', () => {
    const BST = new BinarySearchTree();
    BST.insert(5);
    BST.insert(2);
    BST.insert(7);
    BST.insert(4);
    BST.insert(6);

    BST.bfs(BST.root, (node) => {
      node.value *= 3;
    });

    expect(BST.root.value).toBe(15);
    expect(BST.root.left.value).toBe(6);
  });
});
