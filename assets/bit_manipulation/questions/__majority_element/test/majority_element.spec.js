
import { expect } from 'chai';
import majorityElement from '../majority_element';

describe('majorityElement()', () => {
  it('should return the majority element from an array of integers', () => {
    expect(majorityElement([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])).to.equal(5);
    expect(majorityElement([1, 2, 1, 4, 1])).to.equal(1);
  });
});
