
import LRUCache from '../LRU_cache';

describe('LRUCache()', () => {
  test('should construct a new cache', () => {
    const cache = new LRUCache(1000);

    expect(cache.capacity).toBe(1000);
  });
});
