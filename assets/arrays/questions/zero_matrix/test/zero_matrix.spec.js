
import { expect } from 'chai';
import zeroMatrix from '../zero_matrix';

describe('zeroMatrix()', () => {
  it('should return a zero matrix', () => {
    const matrix = [[1, 1, 1, 1],
                    [1, 1, 1, 1],
                    [1, 1, 0, 1],
                    [1, 1, 1, 1]];

    const zeroed = [[1, 1, 0, 1],
                    [1, 1, 0, 1],
                    [0, 0, 0, 0],
                    [1, 1, 0, 1]];

    expect(zeroMatrix(matrix)).to.deep.equal(zeroed);
  });

  it('should return the same matrix if no zeros are passed in', () => {
      const noZero = [[1, 1],
                      [1, 1]]

    expect(zeroMatrix(noZero)).to.deep.equal(noZero);
  });
});
