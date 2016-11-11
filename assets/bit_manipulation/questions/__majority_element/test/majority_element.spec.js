
import { expect } from 'chai';
import { majorityBit, majorityHash, majoritySort, majorityMooreVoting } from '../majority_element';

describe('majorityBit()', () => {
  it('should return the majority element from an array of integers', () => {
    expect(majorityBit([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])).to.equal(5);
    expect(majorityBit([1, 2, 1, 4, 1])).to.equal(1);
  });
});

describe('majoritySort()', () => {
  it('should return the majority element from an array of integers', () => {
    expect(majoritySort([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])).to.equal(5);
    expect(majoritySort([1, 2, 1, 4, 1])).to.equal(1);
  });
});

describe('majorityHash()', () => {
  it('should return the majority element from an array of integers', () => {
    expect(majorityHash([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])).to.equal(5);
    expect(majorityHash([1, 2, 1, 4, 1])).to.equal(1);
  });
});

describe('majorityMooreVoting()', () => {
  it('should return the majority element from an array of integers', () => {
    expect(majorityMooreVoting([1, 2, 3, 4, 5, 5, 5, 5, 5, 5])).to.equal(5);
    expect(majorityMooreVoting([1, 2, 1, 4, 1])).to.equal(1);
    expect(majorityMooreVoting([4, 2, 4, 4, 1])).to.equal(4);
  });
});
