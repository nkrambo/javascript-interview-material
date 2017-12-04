
import permute from '../permutations';

describe('permute()', () => {
  test('should return an array of all possible permutations of nums', () => {
    const perms = permute([1, 2, 3]);
    expect(perms).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
  });
});
