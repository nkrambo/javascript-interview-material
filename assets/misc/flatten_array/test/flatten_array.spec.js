
import flatten from '../flatten_array';

describe('flatten', () => {
  test('should flatten a mixed k-dimensional array', () => {
    const mixed = [
      1,
      [2, 3],
      [4, [5, 6]],
      true,
      [false, [true]],
      {
        name: 'Nick',
        age: 33,
      },
      [{ nested: true }],
      [7],
      8,
    ];
    expect(flatten(mixed)).toEqual([1, 2, 3, 4, 5, 6, true, false, true, { name: 'Nick', age: 33 }, { nested: true }, 7, 8]);
  });
});
