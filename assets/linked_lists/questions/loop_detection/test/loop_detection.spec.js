
import { expect } from 'chai';
import LinkedList from '../../../data_structures/singly_linked_list/singly_linked_list';
import { loopDetectionSet, loopDetectionRunner } from '../loop_detection';

describe('loopDetectionSet()', () => {
  it('should return the node at the beginning of a loop if a loop exists', () => {
    // A -> B -> C -> D -> E -> C [the same C as eariler, so loop exists]
    const l1 = new LinkedList();
    l1.add('A', 0);
    l1.add('B', 1);
    l1.add('C', 2);
    l1.add('D', 3);
    l1.add('E', 4);

    // point E -> C
    const E = l1.get(4);
    E.next = l1.get(2);

    const test1 = loopDetectionSet(l1);
    expect(test1.value).to.equal('C');

    // F -> O -> F [the same F as eariler, so loop exists]
    const l2 = new LinkedList();
    l2.add('F', 0);
    l2.add('O', 1);

    // point O -> F
    const O = l2.get(1);
    O.next = l2.get(0);

    const test2 = loopDetectionSet(l2);
    expect(test2.value).to.equal('F');
  });

  it('should return null if there is no loop', () => {
    // X -> Y -> Z [no loop]
    const l3 = new LinkedList();
    l3.add('X', 0);
    l3.add('Y', 1);
    l3.add('Z', 2);

    expect(loopDetectionSet(l3)).to.equal(null);
  });
});

describe('loopDetectionRunner()', () => {
  it('should return the node at the beginning of a loop if a loop exists', () => {
    // A -> B -> C -> D -> E -> C [the same C as eariler, so loop exists]
    const l4 = new LinkedList();
    l4.add('A', 0);
    l4.add('B', 1);
    l4.add('C', 2);
    l4.add('D', 3);
    l4.add('E', 4);

    // point E -> C
    const E = l4.get(4);
    E.next = l4.get(2);

    const test3 = loopDetectionSet(l4);
    expect(test3.value).to.equal('C');
  });

  it('should return null if there is no loop', () => {
    // X -> Y -> Z [no loop]
    const l5 = new LinkedList();
    l5.add('X', 0);
    l5.add('Y', 1);
    l5.add('Z', 2);

    expect(loopDetectionRunner(l5)).to.equal(null);
  });
});
