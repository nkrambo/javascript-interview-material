
import Trie from '../trie';

describe('Trie', () => {
  test('should construct a new Trie class', () => {
    const test = new Trie();
    expect(typeof test).toBe('object');
  });

  test('should add a new word', () => {
    const test = new Trie();
    test.insert('testing');
    test.insert('teeth');
    expect(test.root.t.e.s.t.i.n.g['*']).toBe('object');
    // expect(test.root.t.e.e.t.h).to.be.ok;
    // expect(test.root.t.e.e.t.h['*']).to.be.a('object');
  });
});
