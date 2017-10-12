
import Tree from '../tree';

describe('tree', () => {
  test('should instantiate a new Tree class', () => {
    // const tree = new Tree();
    // expect(tree).to.be.a('object');
    // expect(tree.traverse).to.be.a('function');
    // expect(tree.insert).to.be.a('function');
  });

  test('should insert values', () => {
    const tree = new Tree();
    tree.insert(10);
    tree.insert(20, 10);
    tree.insert(30, 10);

    expect(tree.root.value).toBe(10);
    expect(tree.root.children[0].value).toBe(20);
    expect(tree.root.children[1].value).toBe(30);
  });
});
