
import copyRandomList from '../copy_list_with_random_pointer';

/**
* Definition for singly-linked list with a random pointer.
*
* @constructor
* @param {*} label
* @return {object}
*/

function RandomListNode(label) {
  this.label = label;
  this.random = null;
  this.next = this.random;
}

describe('copyRandomList()', () => {
  const list = new RandomListNode(1);
  list.next = new RandomListNode(2);
  list.next.next = new RandomListNode(3);

  // RETURNS
  // {
  //   "label": 1,
  //   "next": {
  //     "label": 2,
  //      "next": {
  //        "label": 3,
  //        "next": null,
  //        "random": null
  //      },
  //      "random": null
  //   },
  //   "random": null
  // }

  test('should return a deep copy of a list with random pointing nodes', () => {
    const deepCopy = copyRandomList(list);
    expect(deepCopy.label).toBe(1);
    expect(deepCopy.random).toBeNull();
    expect(deepCopy.next.label).toBe(2);
  });
});
