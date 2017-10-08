
import { expect } from 'chai';
import pairwiseSwap from '../pairwise_swap';

describe('pairwiseSwap()', () => {
  test('should swap odd and even bits in an integer', () => {
    expect(pairwiseSwap(21)).to.equal(42);
    expect(pairwiseSwap(1)).to.equal(2);
    expect(pairwiseSwap(2)).to.equal(1);
  });
});
