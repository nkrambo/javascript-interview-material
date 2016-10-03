
import { expect } from 'chai';
import { isUnique, isUniqueSort } from '../is_unique';

describe('isUnique()', () => {
  it('should return true for a unique string', () => {
    expect(isUnique('z')).to.be.true;
    expect(isUnique('abc')).to.be.true;
    expect(isUnique('abcdefg1234567!@#$%^&')).to.be.true;
    expect(isUnique('1234567890')).to.be.true;
  });

  it('should return false for a non-unique string', () => {
    expect(isUnique('abcc')).to.be.false;
    expect(isUnique('11')).to.be.false;
  });

  it('should throw a type error', () => {
    expect(function(){ isUnique ([]); }).to.throw (TypeError);
  });

});

describe('isUniqueSort()', () => {
  it('should return true for a unique string', () => {
    expect(isUniqueSort('z')).to.be.true;
    expect(isUniqueSort('abc')).to.be.true;
    expect(isUniqueSort('abcdefg1234567!@#$%^&')).to.be.true;
    expect(isUniqueSort('1234567890')).to.be.true;
  });

  it('should return false for a non-unique string', () => {
    expect(isUniqueSort('abcc')).to.be.false;
    expect(isUniqueSort('11')).to.be.false;
  });

  it('should throw a type error', () => {
    expect(function(){ isUniqueSort ([]); }).to.throw (TypeError);
  });

});
