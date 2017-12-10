
import isPalindrome from '../palindrome_linked_list';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('isPalindrome()', () => {
  test('should return true if linked list is a plaindrome', () => {
    // 0 → 1 → 2 → 1 → 0
    const list = new ListNode(0);
    addNode(list, 1);
    addNode(list, 2);
    addNode(list, 1);
    addNode(list, 0);
    expect(isPalindrome(list)).toBeTruthy();

    // 'a' → 'b' → 'a'
    const letters = new ListNode('a');
    addNode(letters, 'b');
    addNode(letters, 'a');
    expect(isPalindrome(letters)).toBeTruthy();
  });

  test('should return false if linked list is NOT a plaindrome', () => {
    // 'f' → 'o' → 'o'
    const letters = new ListNode('f');
    addNode(letters, 'o');
    addNode(letters, 'o');
    expect(isPalindrome(letters)).toBeFalsy();
  });
});
