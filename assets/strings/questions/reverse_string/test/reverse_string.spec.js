
import { expect } from 'chai';
import reverseString from '../reverse_string';

describe('reverseString()', () => {
  it('should return a reversed a string', () => {
    expect(reverseString('abcd')).to.equal('dcba');
  });

  it('should return the same string if string length <= 1', () => {
    expect(reverseString('p')).to.equal('p');
  });
});
