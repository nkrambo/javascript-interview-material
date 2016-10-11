
import { expect } from 'chai';
import addStrings from '../add_strings';

describe('addStrings()', () => {
  it('should return the integer multiplication of strings num1 and num2', () => {

  });

  it('should throw a type error', () => {
    expect(function(){ addStrings (null, null); }).to.throw (TypeError);
    expect(function(){ addStrings (undefined, undefined); }).to.throw (TypeError);
    expect(function(){ addStrings (5, 5); }).to.throw (TypeError);
  });
});
