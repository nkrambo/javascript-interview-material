
import { expect } from 'chai';
import { addTwoNumbers, ListNode, insert } from '../add_two_numbers';

describe('addTwoNumbers()', () => {
  it('should return the sum of the reverse of l1 and l2', () => {
    // 7 -> 1 -> 6
    const l1 = new ListNode(7);
    insert(l1, 1);
    insert(l1, 6);

    // 5 -> 9 -> 2
    const l2 = new ListNode(5);
    insert(l2, 9);
    insert(l2, 2);

    // that is, 617 + 295 = (2 -> 1 -> 9)
    const result = addTwoNumbers(l1, l2);

    expect(result.val).to.equal(2);
    expect(result.next.val).to.equal(1);
    expect(result.next.next.val).to.equal(9);
  });
});
