
import { expect } from 'chai';
import pascalsTriangle from '../pascals_triangle';

describe('pascalsTriangle()', () => {
  it('should print n rows of pascals triangle', () => {
    const result = pascalsTriangle(5);

    expect(result).to.be.a('array');
    expect(result[0]).to.eql([1]);
    expect(result[1]).to.eql([1, 1]);
    expect(result[2]).to.eql([1, 2, 1]);
    expect(result[3]).to.eql([1, 3, 3, 1]);
  });
});
