
import { expect } from 'chai';
import mergeSort from '../merge_sort';

describe('mergeSort()', () => {
  it('should return a sorted array', () => {
    const test = [4, 3, 7, 1, 2, 5, 9];
    expect(mergeSort(test)).to.deep.equal([1, 2, 3, 4, 5, 7, 9]);
  });

  it('should throw a type error', () => {
    expect(function(){ mergeSort(null); }).to.throw (TypeError);
    expect(function(){ mergeSort(undefined); }).to.throw (TypeError);
    expect(function(){ mergeSort(5); }).to.throw (TypeError);
  });
});
