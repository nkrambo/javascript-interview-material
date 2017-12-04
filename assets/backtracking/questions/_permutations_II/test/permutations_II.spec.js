
// import permuteUnique from '../permutations_II';

describe.skip('permuteUnique()', () => {
  test('should return an array of all unique permutations of nums', () => {
    const perms = permuteUnique([1, 1, 2]);
    expect(perms).toEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]]);
  });
});
