
/**
* LRU Cache
*
* Tags: Design
* Leetcode: 146
*
* Design and implement a data structure for Least Recently Used (LRU) cache. It
* should support the following operations: get and put.
*
* get(key):
* Get the value (will always be positive) of the key if the key exists in the cache,
* otherwise return -1.
*
* put(key, value):
* Set or insert the value if the key is not already present. When the cache reached
* its capacity, it should invalidate the least recently used item before inserting
* a new item.
*
* Follow up:
* Could you do both operations in O(1) time complexity?
*
* Example:
*
* LRUCache cache = new LRUCache( 2 capacity );
*
* cache.put(1, 1);
* cache.put(2, 2);
* cache.get(1);       // returns 1
* cache.put(3, 3);    // evicts key 2
* cache.get(2);       // returns -1 (not found)
* cache.put(4, 4);    // evicts key 1
* cache.get(1);       // returns -1 (not found)
* cache.get(3);       // returns 3
* cache.get(4);       // returns 4
*/

/**
* LRU Cache
*
* Solution:
*
* What is the Least Recently Used (LRU) cache?
*
* It is a cache replacement policy that discards the least recently used items first.
*
* This algorithm requires keeping track of what was used when, which is expensive
* if one wants to make sure the algorithm always discards the least recently used item.
*
* General implementations of this technique require keeping "age bits" for cache-lines
* and track the "Least Recently Used" cache-line based on age-bits. In such an
* implementation, every time a cache-line is used, the age of all other cache-lines changes.
*
* LRU is actually a family of caching algorithms with members including 2Q and LRU/K.
*
* The access sequence for the below example is A B C D E D F.
*
* Once A B C D gets installed in the blocks with sequence numbers (Increment 1 for
* each new Access) and when E is accessed, it is a miss and it needs to be installed
* in one of the blocks. According to the LRU Algorithm, since A has the lowest Rank(A(0)),
* E will replace A.
*
*
*   +--------+--------+--------+--------+
*   |  A(0)  |        |        |        |   // PUT A
*   +--------+--------+--------+--------+
*
*                     ↓
*
*   +--------+--------+--------+--------+
*   |  A(0)  |  B(1)  |        |        |   // PUT B
*   +--------+--------+--------+--------+
*
*                     ↓
*
*   +--------+--------+--------+--------+
*   |  A(0)  |  B(1)  |  C(2)  |        |   // PUT C
*   +--------+--------+--------+--------+
*
*                     ↓
*
*   +--------+--------+--------+--------+
*   |  A(0)  |  B(1)  |  C(2)  |  D(3)  |   // PUT D
*   +--------+--------+--------+--------+
*
*                     ↓
*
*   +--------+--------+--------+--------+
*   |  E(4)  |  B(1)  |  C(2)  |  D(3)  |   // PUT E, A lowest rank, so gets replaced
*   +--------+--------+--------+--------+
*
*                     ↓
*
*   +--------+--------+--------+--------+
*   |  E(4)  |  B(1)  |  C(2)  |  D(5)  |   // GET D, update rank
*   +--------+--------+--------+--------+
*
*                     ↓
*
*   +--------+--------+--------+--------+
*   |  E(4)  |  B(1)  |  C(2)  |  D(5)  |   // PUT F, B lowest rank, so gets replaced
*   +--------+--------+--------+--------+
*/

class LRUCache {
  /**
  * @constructor
  * @param {number} capacity
  */
  constructor(capacity = 10000) {
    // map of key → items
    this.items = new Map();

    // list of nodes
    this.ordering = new DoublyLinkedList();

    // set capacity
    this.capacity = capacity;
  }

  /**
  * @param {number} key
  * @return {number}
  */
  get(key) {
    if (this.items.has(key)) {
      const item = this.items.get(key);
      this.promote(item);
      return item.val;
    }

    // not found
    return -1;
  }

  /**
  * @param {number} key
  * @param {number} value
  * @return {void}
  */
  put(key, value) {
    // set existing item
    if (this.items.has(key)) {
      const item = this.items.get(key);
      item.value = value;
      this.promote(item);

    // set new item
    } else {
      // make space if necessary
      if (this.full()) this.prune();

      // insert new item
      const newItem = new LRUCacheItem(value, key);
      newItem.node = this.ordering.add(newItem);
      this.items.set(newItem);
    }
  }

  /**
  * @return {boolean}
  */
  isFull() {
    return this.items.size() >= this.capacity;
  }

  /**
  * @return {void}
  */
  prune() {
    this.items.delete(this.ordering.pop());
  }

  /**
  * @param {object} item
  * @return {void}
  */
  promote(item) {
    this.ordering.moveToFront(item.node);
  }
}

class LRUCacheItem {
  constructor(value, key) {
    this.value = value === undefined ? null : value;
    this.key = key === undefined ? null : key;
    this.node = null;
  }
}

export default LRUCache;


// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//
//
//
//   // Move a node to the front of the List
//   moveToFront(node) {
//     if (node === this.tail) {
//       this.pop();
//     } else if (node === this.head) {
//       return;
//     } else {
//       node.delete();
//     }
//
//     node.prev = node.next = null;
//
//     // Don't delegate to shift, since we want to keep the same
//     // object.
//
//     // Empty list
//     if (this.head === null && this.tail === null) {
//       this.head = this.tail = node;
//     // At least one node.
//     } else {
//       this.head.prev = node;
//       node.next = this.head;
//       this.head = node;
//     }
//   }
//
//   // Move a node to the end of the List
//   moveToEnd(node) {
//     if (node === this.head) {
//       this.shift();
//     } else if (node === this.tail) {
//       return;
//     } else {
//       node.delete();
//     }
//
//     // Don't delegate to push, since we want to keep the same
//     // object.
//
//     node.prev = node.next = null;
//
//     // Empty list
//     if (this.head === null && this.tail === null) {
//       this.head = this.tail = node;
//     // At least one node.
//     } else {
//       this.tail.next = node;
//       node.prev = this.tail;
//       this.tail = node;
//     }
//   }
// }
