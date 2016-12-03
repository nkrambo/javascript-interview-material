
import { expect } from 'chai';
import LinkedList from '../../../class/linked_list/linked_list';
import { loopDetectionSet, loopDetectionRunner } from '../loop_detection';

describe('loopDetectionSet()', () => {
  it('should return the node at the beginning of a loop if a loop exists', () => {
    // A -> B -> C -> D -> E -> C [the same C as eariler, so loop exists]
    const l1 = new LinkedList();
    let a = 'a';
    let b = 'b';
    let c = 'c';
    let d = 'd';
    let e = 'e';

    l1.add(c, 0);
    l1.add(e, 0);
    l1.add(d, 0);
    l1.add(c, 0);
    l1.add(b, 0);
    l1.add(a, 0);

    const loopNode = loopDetectionSet(l1);
    expect(loopNode.value).to.equal('c');
  });

  it('should return null if there is no loop', () => {

  });
});

// describe('loopDetectionRunner()', () => {
//   it('should return the node at the beginning of a loop if a loop exists', () => {
//
//   });
// });
