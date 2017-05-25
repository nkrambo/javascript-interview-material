
import { expect } from 'chai';
import LinkedList from '../../../data_structures/singly_linked_list/singly_linked_list';
import isPalindrome from '../is_palindrome';

describe('isPalindrome()', () => {
  it('should return true if linked list is a plaindrome', () => {

    // 0 -> 1 -> 2 -> 1 -> 0
    const l1 = new LinkedList();
    l1.add(0, 0);
    l1.add(1, 0);
    l1.add(2, 0);
    l1.add(1, 0);
    l1.add(0, 0);

    expect(isPalindrome(l1)).to.be.true;

    // 'a' -> 'b' -> 'a'
    const l2 = new LinkedList();
    l2.add('a', 0);
    l2.add('b', 0);
    l2.add('a', 0);

    expect(isPalindrome(l2)).to.be.true;

    // 'a' -> 'b' -> 'a'
    const l3 = new LinkedList();
    l3.add('a', 0);

    expect(isPalindrome(l3)).to.be.true;
  });

  it('should return false if linked list is not a plaindrome', () => {

    // 0 -> 1 -> 2 -> 1 -> 1
    const l4 = new LinkedList();
    l4.add(0, 0);
    l4.add(1, 0);
    l4.add(2, 0);
    l4.add(1, 0);
    l4.add(1, 0);

    expect(isPalindrome(l4)).to.be.false;

    // 'f' -> 'o' -> 'o'
    const l5 = new LinkedList();
    l5.add('f', 0);
    l5.add('o', 0);
    l5.add('o', 0);

    expect(isPalindrome(l5)).to.be.false;
  });
});
