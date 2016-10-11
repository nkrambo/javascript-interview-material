
// Ring Buffer

// A ring buffer uses a single, fixed-size buffer, often an array, as if it were connected end-to-end.
// This structure lends itself easily to buffering data streams, like keyboard strokes.

// It's useful because it does not need to have its elements shuffled around when one is consumed,
// like a non-circular buffer. In other words, the circular buffer is well-suited as a FIFO.

// Ring buffering makes a good implementation strategy for a queue that has fixed maximum size.

// https://en.wikipedia.org/wiki/Circular_buffer
// https://github.com/janogonzalez/ringbufferjs/blob/master/index.js

class RingBuffer {
  constructor(capacity) {
    this.buffer = new Array(capacity || 50);
    this.first = 0;
    this.last = 0;
    this.size = 0;
  }

  capacity() {
    return this.buffer.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity();
  }

  enqueue(value) {
    this.last = (this.first + this.size) % this.capacity();
    this.buffer[this.last] = value;

    if (this.isFull()) {
      this.first = (this.first + 1) % this.capacity();
    } else {
      this.size++;
    }

    return this.size;
  }

  dequeue() {
    const value = this.peek();

    this.size--;
    this.first = (this.first + 1) % this.capacity();

    return value;
  }

  peek() {
    if (this.isEmpty()) throw new Error('RingBuffer is empty');
    return this.buffer[this.first];
  }
}

export default RingBuffer;
