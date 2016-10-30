
import { expect } from 'chai';
import isHappy from '../happy_number';

describe('isHappy()', () => {
  it('should return true if num is happy', () => {
    expect(isHappy(19)).to.be.true;
  });

  it('should return false if num is unhappy', () => {
    expect(isHappy(18)).to.be.false;
  });

  it('should throw a type error', () => {
    expect(function(){ isHappy(null); }).to.throw(TypeError);
    expect(function(){ isHappy(undefined); }).to.throw(TypeError);
    expect(function(){ isHappy('string'); }).to.throw(TypeError);
  });
});
