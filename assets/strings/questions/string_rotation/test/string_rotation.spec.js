
import { expect } from 'chai';
import isRotation from '../string_rotation';

describe('isRotation()', () => {
  it('should return true for valid rotation', () => {
    expect(isRotation('waterbottle', 'erbottlewat')).to.be.true;
  });

  it('should return false for invalid rotation', () => {
    expect(isRotation('water', 'teraw')).to.be.false;
  });

  it('should return false for strings of different length', () => {
    expect(isRotation('water', 'waters')).to.be.false;
  });

  it('should return false for s1 length <= 1', () => {
    expect(isRotation('b', 'abcd')).to.be.false;
  });
});
