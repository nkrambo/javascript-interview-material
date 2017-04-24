
import { expect } from 'chai';
import countInstances from '../count_instances';

describe('countInstances()', () => {
  it('should count the instances of values in an array', () => {
    const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    const count = countInstances(names);

    expect(count).to.be.a('object');
    expect(count['Alice']).to.equal(2);
    expect(count['Bob']).to.equal(1);
    expect(count['Tiff']).to.equal(1);
  });
});
