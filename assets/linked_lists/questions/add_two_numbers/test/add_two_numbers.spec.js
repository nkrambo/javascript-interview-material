
import { expect } from 'chai';
import addTwoNumbers from '../add_two_numbers';

describe('addTwoNumbers()', () => {
  it('should return the sum of the reverse of l1 and l2', () => {
    // 7 -> 1 -> 6
    const l1 = {
      val: 7,
      next: {
        val: 1,
        next: {
          val: 6,
          next: null,
        },
      },
    };

    // 5 -> 9 -> 2
    const l2 = {
      val: 5,
      next: {
        val: 9,
        next: {
          val: 2,
          next: null,
        },
      },
    };

    // that is, 617 + 295 = (2 -> 1 -> 9)
    const result = addTwoNumbers(l1, l2);

    expect(result.val).to.equal(2);
    expect(result.next.val).to.equal(1);
    expect(result.next.next.val).to.equal(9);
  });
});
