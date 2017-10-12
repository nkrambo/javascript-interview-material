

import stringCompress from '../string_compression';

describe('stringCompress()', () => {
  test('should return string if string.length <= 2', () => {
    expect(stringCompress('aa')).toBe('aa');
    expect(stringCompress('b')).toBe('b');
  });

  test('should return compressed version of string', () => {
    expect(stringCompress('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompress('aaaabbbbcccc')).toBe('a4b4c4');
    expect(stringCompress('zzz')).toBe('z3');
  });

  test('should return string if compressed is >= string.length', () => {
    expect(stringCompress('aabbcc')).toBe('aabbcc');
    expect(stringCompress('gghhadwhjk')).toBe('gghhadwhjk');
  });
});
