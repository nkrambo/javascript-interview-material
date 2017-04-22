
import { expect } from 'chai';
import reduce from '../reduce';

describe('reduce()', () => {
  it('should reduce an array to a single value', () => {
    const array = [1, 2, 3, 4, 5];
    const total = reduce(array, (acc, val) => acc + val, 0);

    expect(total).to.equal(15);
  });
});
