
import { expect } from 'chai';
import { rotateArrayBrute, rotateArrayExtra } from '../rotate_array';

describe('rotateArrayBrute()', () => {
  it('should rotate an array to the right by k steps', () => {
    const test = [1, 2, 3, 4, 5, 6, 7];
    rotateArrayBrute(test, 3);
    expect(test).to.deep.equal([5, 6, 7, 1, 2, 3, 4]);
  });
});

describe('rotateArrayExtra()', () => {
  it('should rotate an array to the right by k steps', () => {
    const test = [1, 2, 3, 4, 5, 6, 7];
    rotateArrayExtra(test, 3);
    expect(test).to.deep.equal([5, 6, 7, 1, 2, 3, 4]);
  });
});
