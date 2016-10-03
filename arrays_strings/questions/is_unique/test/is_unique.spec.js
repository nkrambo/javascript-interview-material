
import { expect } from 'chai';
import { isUnique, isUniqueInPlace } from '../is_unique';

describe('is unique function, using a set', () => {
  it('should return true for a unique string', () => {
    expect(isUnique('abc')).to.be.true;
  });

});
