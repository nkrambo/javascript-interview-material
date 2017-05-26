
import { expect } from 'chai';
import stringCompress from '../string_compression';

describe('stringCompress()', () => {
  it('should return string if string.length <= 2', () => {
    expect(stringCompress('aa')).to.equal('aa');
    expect(stringCompress('b')).to.equal('b');
  });

  it('should return compressed version of string', () => {
    expect(stringCompress('aabcccccaaa')).to.equal('a2b1c5a3');
    expect(stringCompress('aaaabbbbcccc')).to.equal('a4b4c4');
    expect(stringCompress('zzz')).to.equal('z3');
  });

  it('should return string if compressed is >= string.length', () => {
    expect(stringCompress('aabbcc')).to.equal('aabbcc');
    expect(stringCompress('gghhadwhjk')).to.equal('gghhadwhjk');
  });
});
