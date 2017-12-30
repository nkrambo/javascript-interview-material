
import HashTable from '../hash_table';

describe('Hash Table', () => {
  test('should construct a minimum heap by default', () => {
    const hash = new HashTable(6);

    hash.insert('lion', 'meow');
    expect(hash.lookup('lion')).toBe('meow');
    hash.insert('lion', 'roar');
    expect(hash.lookup('lion')).toBe('roar');
    hash.delete('lion');
    expect(hash.lookup('lion')).toBeNull();

    hash.insert('one', 'value');
    hash.insert('two', 'value');
    hash.insert('three', 'value');
    hash.insert('four', 'value');
  });
});
