
// Circular Buffer

// A cicular buffer uses a single, fixed-size buffer, often an array, as if it were connected end-to-end.
// This structure lends itself easily to buffering data streams, like keyboard strokes.

// It's useful because it does not need to have its elements shuffled around when one is consumed,
// like a non-circular buffer. In other words, the circular buffer is well-suited as a FIFO.

// Circular buffering makes a good implementation strategy for a queue that has fixed maximum size.

// https://en.wikipedia.org/wiki/Circular_buffer

class CircularBuffer {
  constructor(capacity) {
    this.buffer = new Array(capacity || 50);
    // this.size = this.buffer.length;
  }

  capacity() {
    return this.buffer.length;
  }

  enqueue(value) {

  }

  dequeue() {}
}

export default CircularBuffer;
