
import { expect } from 'chai';
import deleteNode from '../delete_node';
import LinkedList from '../../../classes/linked_list/linked_list';

describe('deleteNode()', () => {
  const list = new LinkedList();
  list.add('a', 0);
  list.add('b', 1);
  list.add('c', 2);

  it('should delete a middle node', () => {
    const middleNode = list.get(1);

    // modifies middle node in-place
    deleteNode(middleNode);

    // should equal 'c'
    const replacedNode = list.get(1);
    expect(replacedNode.value).to.equal('c');
  });

  it('should throw an error trying to delete last node', () => {
    // position 1 is now last
    const lastNode = list.get(1);
    expect(function(){ deleteNode(lastNode) }).to.throw (Error);
  });

});
