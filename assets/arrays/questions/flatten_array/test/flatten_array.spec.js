
import { expect } from 'chai';
import { flatten1, flatten2, flatten3, flatten4, flattenMixed } from '../flatten_array';

const list1 = [[0, 1], [2, 3], [4, 5]];
const list2 = [0, 1, [2, 3], [4], [5]];

describe('flatten1()', () => {
  it('should flatten a 2D array', () => {
    expect(flatten1(list1)).to.eql([0, 1, 2, 3, 4, 5]);
    expect(flatten1(list2)).to.eql([0, 1, 2, 3, 4, 5]);
  });
});

describe('flatten2()', () => {
  it('should flatten a 2D array', () => {
    expect(flatten2(list1)).to.eql([0, 1, 2, 3, 4, 5]);
  });
});

describe('flatten3()', () => {
  it('should flatten a 2D array', () => {
    expect(flatten3(list1)).to.eql([0, 1, 2, 3, 4, 5]);
    expect(flatten3(list2)).to.eql([0, 1, 2, 3, 4, 5]);
  });
});

describe('flatten4()', () => {
  it('should flatten a 2D array', () => {
    expect(flatten4(list1)).to.eql([0, 1, 2, 3, 4, 5]);
    expect(flatten4(list2)).to.eql([0, 1, 2, 3, 4, 5]);
  });
});

describe('flattenMixed()', () => {
  const list = [0, 1, [2, 3], [4], [5, [6, 7, 8]]];

  it('should flatten a mixed array', () => {
    expect(flattenMixed(list)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
