
import { expect } from 'chai';
import rotateMatrix from '../rotate_matrix';

describe('rotateMatrix()', () => {
  it('should return a rotated matrix 90CW', () => {
    const matrix = [[ 1,  1, 1, 1],
                    [ 2,  2, 2, 2],
                    [ 3,  3, 3, 3],
                    [ 4,  4, 4, 4]];

    const rotated = [[ 4,  3, 2, 1],
                     [ 4,  3, 2, 1],
                     [ 4,  3, 2, 1],
                     [ 4,  3, 2, 1]];

    expect(rotateMatrix(matrix)).to.deep.equal(rotated);
  });

  it('should return an unchanged 1, 1 matrix', () => {
    let smallMatrix = [[0]];
    expect(rotateMatrix(smallMatrix)).to.equal(smallMatrix);
  });

  it('should throw a type error', () => {
    const invalidMatrix = [[ 4,  8, 12, 16],
                           [ 3,  7, 11]];

    expect(function(){ rotateMatrix (5); }).to.throw (TypeError);
    expect(function(){ rotateMatrix (null); }).to.throw (TypeError);
    expect(function(){ rotateMatrix (undefined); }).to.throw (TypeError);
    expect(function(){ rotateMatrix (invalidMatrix); }).to.throw (TypeError);
  });

});
