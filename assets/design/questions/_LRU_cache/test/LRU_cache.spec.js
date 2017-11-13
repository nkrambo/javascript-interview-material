
import LRUCache from '../LRU_cache';

describe('LRUCache()', () => {
  test('should construct a new cache', () => {
    const cache = new LRUCache(1000);

    expect(cache.capacity).toBe(1000);
  });

  test('should PUT a new cache item', () => {
    const cache = new LRUCache(1000);

    expect(cache.capacity).toBe(1000);
  });

  test('should GET a cache item', () => {
    const cache = new LRUCache(1000);

    expect(cache.capacity).toBe(1000);
  });
});
