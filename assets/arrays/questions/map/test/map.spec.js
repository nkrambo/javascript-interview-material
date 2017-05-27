
import { expect } from 'chai';
import map from '../map';

describe('map()', () => {
  it('should return a new modified array', () => {
    const array = [1, 2, 3, 4, 5];
    const double = map(array, (n) => n * 2);

    expect(double).to.be.a('array');
    expect(double.length).to.be.equal(5);
    expect(double[0]).to.be.equal(2);
    expect(double[double.length - 1]).to.be.equal(10);
  });
});
