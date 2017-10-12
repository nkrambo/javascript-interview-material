

import recursivePerms from '../recursive_string_permutations';

describe('recursivePerms()', () => {
  test('should return string permutations', () => {
    const cats = recursivePerms('cats');
    expect(cats.size).toBe(24);
    expect(cats.has('cast')).toBeTruthy();

    const cat = recursivePerms('cat');
    expect(cat.size).toBe(6);
    expect(cat.has('tac')).toBeTruthy();
  });
});
