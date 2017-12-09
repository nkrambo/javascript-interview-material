
import { swapPairsRecursive, swapPairs } from '../swap_nodes_in_pairs';
import { ListNode, addNode } from '../../../data_structures/list_node/list_node';

describe('swapPairsRecursive()', () => {
  test('should swap every pair of adjacent nodes and return the list head', () => {
    // 1 → 2 → 3 → 4
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 4);

    // 2 → 1 → 4 → 3
    const swapped = swapPairsRecursive(list);
    expect(swapped.val).toEqual(2);
    expect(swapped.next.val).toEqual(1);
    expect(swapped.next.next.val).toEqual(4);
  });
});

describe('swapPairs()', () => {
  test('should swap every pair of adjacent nodes and return the list head', () => {
    // 1 → 2 → 3 → 4
    const list = new ListNode(1);
    addNode(list, 2);
    addNode(list, 3);
    addNode(list, 4);

    // 2 → 1 → 4 → 3
    const swapped = swapPairs(list);
    expect(swapped.val).toEqual(2);
    expect(swapped.next.val).toEqual(1);
    expect(swapped.next.next.val).toEqual(4);
  });
});
