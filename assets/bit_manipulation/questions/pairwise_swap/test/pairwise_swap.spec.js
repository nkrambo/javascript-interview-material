

import pairwiseSwap from '../pairwise_swap';

describe('pairwiseSwap()', () => {
  test('should swap odd and even bits in an integer', () => {
    expect(pairwiseSwap(21)).toBe(42);
    expect(pairwiseSwap(1)).toBe(2);
    expect(pairwiseSwap(2)).toBe(1);
  });
});
