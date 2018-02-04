
import { flatten, flatten2D, flattenIterative } from '../flatten_array';

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

describe('flatten2D', () => {
  test('should flatten a 2D array', () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6, 7, 8],
    ];

    expect(flatten2D(matrix)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('flattenIterative', () => {
  test('should flatten a 2D array', () => {
    const matrix = [
      [1, 2],
      [3, 4],
      [5, 6, 7, 8],
    ];

    expect(flattenIterative(matrix)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
