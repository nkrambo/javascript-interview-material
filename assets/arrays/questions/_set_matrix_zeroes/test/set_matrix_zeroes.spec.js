
import setZeroes from '../set_matrix_zeroes';

describe('setZeroes()', () => {
  it('should return a zero matrix', () => {
    const matrix = [[1, 1, 1, 1],
                    [1, 1, 1, 1],
                    [1, 1, 0, 1],
                    [1, 1, 1, 1]];

    const zeroed = [[1, 1, 0, 1],
                    [1, 1, 0, 1],
                    [0, 0, 0, 0],
                    [1, 1, 0, 1]];

    expect(setZeroes(matrix)).toEqual(zeroed);
  });

  it('should return the same matrix if no zeros are passed in', () => {
    const noZero = [[1, 1],
                    [1, 1]];

    expect(setZeroes(noZero)).toEqual(noZero);
  });
});
