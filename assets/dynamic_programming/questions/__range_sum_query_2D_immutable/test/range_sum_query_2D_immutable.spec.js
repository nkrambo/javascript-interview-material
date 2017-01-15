
import { expect } from 'chai';
import sumQuery from '../range_sum_query_2D_immutable';

describe('sumQuery()', () => {
  it('should return the number of ways reach bottom right from top left', () => {
    const matrix = [[2, 0, -3, 4],
                    [6, 3, 2, -1],
                    [5, 4, 7, 3],
                    [2, -6, 8, 1]];

    expect(sumQuery(matrix, [[1, 0], [2, 1]])).to.equal(18);
    expect(sumQuery(matrix, [[0, 2], [2, 3]])).to.equal(12);
  });
});
