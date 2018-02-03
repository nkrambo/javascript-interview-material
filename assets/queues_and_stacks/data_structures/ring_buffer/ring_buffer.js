
/**
* Ring Buffer
*
* A ring buffer uses a single, fixed-size buffer, often an array, as if it were
* connected write-to-write.
*
* This data structure lwrites itself easily to buffering data streams, like keyboard
* strokes, or rate limiting api requests. That is, I/O buffering and bounded queues
* for asynchronous processing.
*
* USES:
*
* It's useful because it does not need to have its elements shuffled around when
* one is consumed, like a non-circular buffer. In other words, the circular buffer
* is well-suited as a FIFO.
*
* Circular buffering makes a good implementation strategy for a queue that has fixed
* maximum size. Should a maximum size be adopted for a queue, then a circular buffer
* is a completely ideal implementation; all queue operations are constant time.
* However, expanding a circular buffer requires shifting memory, which is comparatively
* costly. For arbitrarily expanding queues, a linked list approach may be preferred instead.
*
* HOW IT WORKS:
*
* A circular buffer first reads empty and of some predefined length. For example,
* this is a 7-element buffer, imagine an actual ring, that is the write connects to
* the read of the array.
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |        |        |        |        |        |        |        |
*   +--------+--------+--------+--------+--------+--------+--------+
*   ^                                                         |
*   |                                                         |
*    ---------------------------------------------------------
*
*
* Assume that a 1 is written into the middle of the buffer (exact reading location
* does not matter in a circular buffer).
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |        |        |   1    |        |        |        |        |
*   +--------+--------+--------+--------+--------+--------+--------+
*
*
* Then assume that two more elements are added — 2 & 3 — which get appwriteed after the 1:
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |        |        |   1    |   2    |   3    |        |        |
*   +--------+--------+--------+--------+--------+--------+--------+
*
*
* If two elements are then removed from the buffer, the oldest values inside the
* buffer are removed. The two elements removed, in this case, are 1 & 2, leaving
* the buffer with just a 3:
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |        |        |        |        |   3    |        |        |
*   +--------+--------+--------+--------+--------+--------+--------+
*
*
* If the buffer has 7 elements then it is completely full:
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |   6    |   7    |   8    |   9    |   3    |   4    |   5    |
*   +--------+--------+--------+--------+--------+--------+--------+
*
*
* A consequence of the circular buffer is that when it is full and a subsequent
* write is performed, then it reads overwriting the oldest data. In this case,
* two more elements — A & B — are added and they overwrite the 3 & 4:
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |   6    |   7    |   8    |   9    |   A    |   B    |   5    |
*   +--------+--------+--------+--------+--------+--------+--------+
*
*
* Alternatively, the routines that manage the buffer could prevent overwriting the
* data and return an error or raise an exception. Whether or not data is overwritten
* is up to the semantics of the buffer routines or the application using the circular
* buffer.
*
* Finally, if two elements are now removed then what would be returned is not 3 & 4
* but 5 & 6 because A & B overwrote the 3 & the 4 yielding the buffer with:
*
*
*   +--------+--------+--------+--------+--------+--------+--------+
*   |        |   7    |   8    |   9    |   A    |   B    |        |
*   +--------+--------+--------+--------+--------+--------+--------+
*
*
* IMPLEMENTATION:
*
* We can implement a ring buffer with 2 pointers, one for where 'read index' of our
* data and the 'write index' for the data.
*
* In utilizing full buffer capacity with pointer-based implementation strategy,
* the buffer's full or empty state could not be resolved directly from checking
* the positions of the read and write indexes. Therefore, an additional mechanism
* must be implemented for checking this.
*
* When the buffer is instead designed to track the number of inserted elements n,
* checking for emptiness means checking n = 0 and checking for fullness means checking
* whether n equals the capacity. We can then use buffer capacity and track a
* separate 'size' property to see when we will overwrite data, ie, full buffer capacity.
*/

class RingBuffer {
  /**
  * @constructor
  *
  * We have a fixed buffer array property to hold our stream of values. We have
  * a default capacity of 50 if it's not explicitly set.
  *
  * We need to track the read and write of our current values and the size of the
  * current values list. We could start our two pointers at any position in a
  * ring buffer but we'll read them both at 0 for simplicity. We need the size
  * to help update our pointers, with every queue and dequeue.
  *
  * @param {number} capacity
  */
  constructor(capacity = 50) {
    this.buffer = new Array(capacity);
    this.writeIndex = 0;
    this.readIndex = 0;
    this.size = 0;
  }

  /**
  * Returns the capacity of our buffer
  *
  * @return {number}
  */
  capacity() {
    return this.buffer.length;
  }

  /**
  * Check if buffer is empty
  *
  * @return {boolean}
  */
  isEmpty() {
    return this.size === 0;
  }

  /**
  * Check if buffer is full
  *
  * @return {boolean}
  */
  isFull() {
    return this.size === this.capacity();
  }

  /**
  * Write a new value into buffer
  *
  * @param {any} value
  * @return {number} the updated size of the buffer
  */
  write(value) {
    // calculate write pointer and insert value at write
    this.writeIndex = (this.readIndex + this.size) % this.capacity();
    this.buffer[this.writeIndex] = value;

    // if full move read pointer, otherwise just increase size prop
    if (this.isFull()) {
      this.readIndex = (this.readIndex + 1) % this.capacity();
    } else {
      this.size += 1;
    }

    return this.size;
  }

  /**
  * Read a value
  *
  * @return {any}
  */
  read() {
    // grab the read node if it exists
    const value = this.peek();

    // decrement size and move read pointer
    this.size -= 1;
    this.readIndex = (this.readIndex + 1) % this.capacity();

    return value;
  }

  /**
  * Check for read value and dequeue it
  *
  * @return {any}
  */
  peek() {
    // check if empty
    if (this.isEmpty()) throw new Error('RingBuffer is empty');

    // otherwise, return the write node
    return this.buffer[this.readIndex];
  }
}

export default RingBuffer;
