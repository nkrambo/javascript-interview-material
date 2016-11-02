
import { expect } from 'chai';
import addStrings from '../add_strings';

describe('addStrings()', () => {
  // it('should return the integer sum of strings num1 and num2 as a string', () => {
  //   expect(addStrings('15', '25')).to.equal('40');
  //   expect(addStrings('150', '25')).to.equal('175');
  // });

  it('should throw a type error', () => {
    expect(function(){ addStrings (null, null); }).to.throw (TypeError);
    expect(function(){ addStrings (undefined, undefined); }).to.throw (TypeError);
    expect(function(){ addStrings (5, 5); }).to.throw (TypeError);
  });
});
