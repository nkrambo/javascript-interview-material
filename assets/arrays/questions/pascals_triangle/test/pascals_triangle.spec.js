
import generate from '../pascals_triangle';

describe('generate()', () => {
  test('should print n rows of pascals triangle', () => {
    const result = generate(5);

    expect(result[0]).toEqual([1]);
    expect(result[1]).toEqual([1, 1]);
    expect(result[2]).toEqual([1, 2, 1]);
    expect(result[3]).toEqual([1, 3, 3, 1]);
  });
});
