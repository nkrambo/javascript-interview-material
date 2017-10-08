
import { expect } from 'chai';
import recursivePerms from '../recursive_string_permutations';

describe('recursivePerms()', () => {
  test('should return string permutations', () => {
    const cats = recursivePerms('cats');
    expect(cats.size).to.equal(24);
    expect(cats.has('cast')).to.be.true;

    const cat = recursivePerms('cat');
    expect(cat.size).to.equal(6);
    expect(cat.has('tac')).to.be.true;
  });
});
