
/**
* Hash Tables
*
* The hash table is the most commonly used data structure for implementing associative
* arrays. It features average search times, making it an efficient data structure
* to use for caching, indexing, and other time-critical operations.
*
* Hash tables are implemented by using an array of fixed size. To insert a key/value
* pair, the key is first hashed. Since hashes are just large integers, the hash
* is then taken modulo the size of the array, yielding an index. The key/value pair
* is then inserted into a bucket at that index.
*
* Buckets are required because the birthday problem says that hash collisions are
* inevitable; so instead of each index storing a single key/value pair, it stores
* a bucket of pairs. In the most basic implementation, buckets are implemented by
* using linked lists.
*
* Notice that the size of the bucket array doesn't limit the number of key/value
* pairs that can be stored in the hash table. In the above animation, the bucket
* array is of length 6, but 8 key/value pairs are inserted. This ratio of the
* number of pairs to the number of buckets is called the load factor.
*
* load factor = number of pairs / number of buckets
*
* As the load factor increases, collisions are more likely to occur. As more and
* more collisions occur, performance degrades. In the absolute worst case, a hash
* table with only 1 bucket, the hash table behaves like a linked list with search,
* insertion, and deletion times.
*
* https://brilliant.org/wiki/hash-tables/?subtopic=types-and-data-structures&chapter=hash-based-data-structures
*/

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

function djb2x(s) {
  // magic constant
  // fewer collisions and better avalanche effect
  let hash = 5381;

  // convert string to array of UTF-16 codes
  const byteArray = s.split('').map((char) => char.charCodeAt(0));

  // XOR it all together
  // 33 is another magic constant
  byteArray.forEach((byte) => {
    // the modulus keeps it 32-bit, JavaScript ints don't overflow
    hash = ((hash * 33) ^ byte) % 0x100000000;
  });

  return hash;
}

class HashTable {
  constructor(capacity = 10) {
    this.bucket = new Array(capacity);
    this.capacity = capacity;
  }

  insert(key, value) {
    // hash and bucket indexing
    const keyHash = djb2x(key);
    const bucketIndex = keyHash % this.capacity;

    // create new node
    const newNode = new Node(key, value);

    // check if our bucket has a node in it already
    const existingNode = this.bucket[bucketIndex];

    // bucket has node already, step through linked list
    // 1. if node has the same key, we're updating
    // 2. otherwise, we push the new node on the end of the list
    if (existingNode) {
      let curr = existingNode;
      let lastNode = null;

      // step over
      while (curr) {
        // found existing key, replace value
        if (curr.key === key) {
          curr.value = value;
          return;
        }

        // otherwise, keep going
        lastNode = curr;
        curr = curr.next;

        // if we get this far, we didn't find an existing key, we're at the end of the linked list
        // so just append the new node to the end of the bucket
        lastNode.next = newNode;
      }

    // no node in bucket, insert new node
    } else {
      this.bucket[bucketIndex] = newNode;
    }
  }

  lookup(key) {
    // hash and bucket indexing
    const keyHash = djb2x(key);
    const bucketIndex = keyHash % this.capacity;

    // check if our bucket has a node in it already
    const existingNode = this.bucket[bucketIndex];

    if (existingNode) {
      let curr = existingNode;

      // step over
      while (curr) {
        if (curr.key === key) return curr.value;

        // keep traversing
        curr = curr.next;
      }
    }

    // not found
    return null;
  }

  delete(key) {
    // hash and bucket indexing
    const keyHash = djb2x(key);
    const bucketIndex = keyHash % this.capacity;

    // check if our bucket has a node in it already
    const existingNode = this.bucket[bucketIndex];

    if (existingNode) {
      let curr = existingNode;
      let lastNode = null;

      // step over linked list
      while (curr) {
        if (curr.key === key) {
          if (lastNode) {
            lastNode.next = curr.next;
          } else {
            this.bucket[bucketIndex] = curr.next;
          }
        }

        // keep traversing
        lastNode = curr;
        curr = curr.next;
      }
    }
  }
}

export default HashTable;
