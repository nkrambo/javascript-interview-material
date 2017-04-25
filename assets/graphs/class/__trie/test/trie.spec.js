
import { expect } from 'chai';
import Trie from '../trie';

describe('Trie', () => {
  it('should construct a new Trie class', () => {
    const test = new Trie();
    expect(typeof test).to.equal('object');
    expect(test.root).to.be.a('object');
  });

  it('should add a new word', () => {
    const test = new Trie();
    test.insert('testing');
    test.insert('teeth');
    expect(test.root.t.e.s.t.i.n.g).to.be.ok;
    expect(test.root.t.e.s.t.i.n.g['*']).to.a('object');
    expect(test.root.t.e.e.t.h).to.be.ok;
    expect(test.root.t.e.e.t.h['*']).to.be.a('object');
  });
});
