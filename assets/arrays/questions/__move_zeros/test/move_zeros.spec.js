
import { expect } from 'chai';
import { moveZeros, moveZerosOptimal } from '../move_zeros';

describe('moveZeros()', () => {
  it('should move all zeros to the end and keep non-zeros in original order', () => {
    const test = [0, 4, 7, 2, 0, 0, 2, 0];
    moveZeros(test);
    expect(test[0]).to.equal(4);
    expect(test[1]).to.equal(7);
    expect(test[test.length - 4]).to.equal(0);
  });

  it('should move keep non-zeros in original order if there are no zeros', () => {
    const test = [1, 2, 3];
    moveZeros(test);
    expect(test[0]).to.equal(1);
    expect(test[1]).to.equal(2);
  });
});

describe('moveZerosOptimal()', () => {
  it('should move all zeros to the end and keep non-zeros in original order', () => {
    const test = [0, 4, 7, 2, 0, 0, 2, 0];
    moveZerosOptimal(test);
    expect(test[0]).to.equal(4);
    expect(test[1]).to.equal(7);
    expect(test[test.length - 4]).to.equal(0);
  });

  it('should move keep non-zeros in original order if there are no zeros', () => {
    const test = [1, 2, 3];
    moveZerosOptimal(test);
    expect(test[0]).to.equal(1);
    expect(test[1]).to.equal(2);
  });
});
