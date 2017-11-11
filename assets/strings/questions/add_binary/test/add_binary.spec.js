
import addBinary from '../add_binary';

describe('addBinary()', () => {
  test('should return the sum of two binary strings', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1', '1')).toBe('10');
    expect(addBinary('100', '101')).toBe('1001');
  });
});
