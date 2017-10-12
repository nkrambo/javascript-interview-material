
import appearsTwice from '../which_appears_twice';

describe('appearsTwice()', () => {
  test('should return the number which appears twice', () => {
    expect(appearsTwice([1, 2, 3, 4, 4, 5, 6, 7])).toBe(4);
    expect(appearsTwice([1, 1])).toBe(1);
    expect(appearsTwice([1, 2, 3, 3])).toBe(3);
  });

  test('should throw a type error', () => {
    expect(() => { appearsTwice(null); }).toThrow(TypeError);
    expect(() => { appearsTwice(undefined); }).toThrow(TypeError);
    expect(() => { appearsTwice(5); }).toThrow(TypeError);
  });
});
