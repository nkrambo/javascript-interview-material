
import { LRUCache, LRUCacheItem, OrderList } from '../LRU_cache';

describe('LRUCache', () => {
  test('should construct a new cache', () => {
    const cache = new LRUCache(1000);

    expect(cache.capacity).toBe(1000);
  });

  test('should PUT a new cache item', () => {
    const cache = new LRUCache(1000);

    cache.put(1, 5);
    cache.put(2, 6);

    expect(cache.items.size).toBe(2);
  });

  // test('should GET a cache item', () => {
  //   const cache = new LRUCache(1000);
  //
  //   cache.put(1, 1);
  //   expect(cache.get(1)).toBe(1);
  // });
});

// * cache.put(1, 1);
// * cache.put(2, 2);
// * cache.get(1);       // returns 1
// * cache.put(3, 3);    // evicts key 2
// * cache.get(2);       // returns -1 (not found)
// * cache.put(4, 4);    // evicts key 1
// * cache.get(1);       // returns -1 (not found)
// * cache.get(3);       // returns 3
// * cache.get(4);       // returns 4

describe('LRUCacheItem', () => {
  test('should construct a new cache item', () => {
    const cacheItem = new LRUCacheItem(1, 2);
    expect(cacheItem.key).toBe(1);
    expect(cacheItem.value).toBe(2);
    expect(cacheItem.node).toBeNull();
  });
});

describe('OrderList', () => {
  test('should construct a new order list', () => {
    const ordering = new OrderList();

    expect(ordering.head).toBeNull();
    expect(ordering.tail).toBeNull();
    expect(ordering.length).toBe(0);
  });

  test('should move a node to start of the list', () => {});

  test('should move a node to the end of the list', () => {});
});
