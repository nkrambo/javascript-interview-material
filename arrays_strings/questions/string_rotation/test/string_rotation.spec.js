
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

  it('should throw a type error', () => {
    expect(function(){ isRotation (null, null); }).to.throw (TypeError);
    expect(function(){ isRotation (undefined, undefined); }).to.throw (TypeError);
    expect(function(){ isRotation ('testing', undefined); }).to.throw (TypeError);
    expect(function(){ isRotation (undefined, 'testing'); }).to.throw (TypeError);
    expect(function(){ isRotation (5, 5); }).to.throw (TypeError);
  });

});
